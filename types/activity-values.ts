import {ActivityName} from './activity-name';

// Container class for attributes related to a specific user activity.
export default class ActivityValues {

  goal: number = 0;
  color: string = 'white';

  constructor(readonly name: ActivityName, goal: number) {
    this.goal = goal;
  }
}