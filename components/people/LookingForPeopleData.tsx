import { PeopleData } from './PeopleInfo';
import { availableFor as availableForArray }  from "../../enums/availableFor";
import { describes as describesArray } from "../../enums";

const generateRandomValue = (array) => {
    return array[Math.floor(Math.random() * (array.length - 1))];
}

export const LookingForPeopleData = [...PeopleData, ...PeopleData, ...PeopleData].map((person, index) => ({
    ...person, 
    id: index + 1,
    occupation: generateRandomValue(describesArray), 
    availableFor: generateRandomValue(availableForArray)
}))