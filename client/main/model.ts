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
  members: Members;
  surveys: Surveys;
  feedback: Feedback;
}

export interface Members {
  list: Member[];
  selected: Member;
}

export interface Feedback {
  rating: number;
  text: string[];
}

export interface Surveys {
  list: Survey[];
  selected: Survey;
}

export interface Teams {
  list: Team[];
  selected: Team;
}

