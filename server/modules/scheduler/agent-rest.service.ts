import axios from "axios";
import debug from "debug";
import { config } from "../../config";

const {
  apiKey,
  agenda: { apiUrl }
} = config;

const log = debug("app:scheduler:agent-rest");

export type JobId = string & { __isJobId: true };

interface AgendaJobType {
  name: JobId;
  url: string;
}

interface AgendaJobInstance {
  name: JobId;
  interval: string;
  data?: {
    headers?: Record<string, string>;
    params?: Record<string, string>;
    query?: Record<string, string>;
    body?: any;
  };
}

class AgendaRestService {
  async createJobType(jobType: AgendaJobType) {
    log(`Creating job type ${jobType.name}`);

    await axios.post(`${apiUrl}/job`, jobType, {
      headers: { "x-api-key": apiKey }
    });

    log(`Created job type ${jobType.name}`);
  }

  async createJobInstance(jobInstance: AgendaJobInstance) {
    log(`Creating job instance ${jobInstance.name} to run at ${jobInstance.interval}`);

    await axios.post(`${apiUrl}/job/once`, jobInstance, {
      headers: { "x-api-key": apiKey }
    });

    log(`Created job instance ${jobInstance.name} to run at ${jobInstance.interval}`);
  }

  async getJobTypes() {
    log("Getting job types");

    const { data } = await axios.get<AgendaJobType[]>(`${apiUrl}/job`, {
      headers: { "x-api-key": apiKey }
    });

    log("Got job types");

    return data;
  }
}

export const agendaRestService = new AgendaRestService();
