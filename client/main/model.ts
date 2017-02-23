export type Team = {
  id?: string;
  name: string;
};

export type Member = {
  id?: string;
  name: string;
};

export interface State {
  teams: Team[];
  members: Members;
}

export interface Members {
  list: Member[];
  team: Team;
}

export type Teams = Team[];
