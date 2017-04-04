export type Team = {
  id?: string;
  name: string;
};

export type Member = {
  id?: string;
  name: string;
};

export type Survey = {
  id?: string;
  name: string;
};

export interface State {
  teams: Teams;
  cohorts: Cohorts;
  members: Members;
  surveys: Surveys;
  feedback: Feedback;
  form: Form; 
}

export interface Members {
  list: Member[];
  selected: Member;
}

export interface Feedback {
  rating: number;
  text: string[];
}

export interface Cohorts {
  list: any[];
  show: boolean;
}

export interface Form {
  submitted: boolean;
}

export interface MemberFeedback {
  id: number;
  name: string;
  member_id: string;
  rating: number;
  text: string;
}

export interface Surveys {
  list: Survey[];
  selected: Survey;
}

export interface Teams {
  list: Team[];
  selected: Team;
}

export type Params = {
  id: string;
};
