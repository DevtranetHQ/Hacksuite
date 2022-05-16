import dayjs from "dayjs";
import { agendaRestService } from "./../scheduler/agent-rest.service";
import { JobId } from "../scheduler/agent-rest.service";
import { config } from "../../config";
import { IEvent } from "../events/event.model";

const {
  url: { CLIENT_URL },
  apiKey
} = config;

const Schedule15MinutesBeforeEvent = "15MinutesBeforeEventJobId" as JobId;

const endpoint = `${CLIENT_URL}/api/scheduled/events/:uniqueId/before`;

class ScheduleEventNotificationService {
  async scheduleNotification(event: IEvent) {
    const jobTypes = await agendaRestService.getJobTypes();
    const existingJobType = jobTypes.find(jobType => jobType.name === Schedule15MinutesBeforeEvent);

    if (!existingJobType) {
      await agendaRestService.createJobType({
        name: Schedule15MinutesBeforeEvent,
        url: endpoint
      });
    }

    const runAt = dayjs(event.start).subtract(15, "minute").toDate();

    await agendaRestService.createJobInstance({
      name: Schedule15MinutesBeforeEvent,
      data: { params: { uniqueId: event.uniqueId }, headers: { "x-api-key": apiKey } },
      interval: runAt.toString()
    });
  }
}

export const scheduleEventNotificationService = new ScheduleEventNotificationService();
