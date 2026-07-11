import { apiGet, apiPatch, apiPost } from "./api";
import { getUserId } from "./userApi";

interface CreateTeamRequest {
  userId: number;
  teamName: string;
}

interface CreateTeamData {
  teamId: number;
  teamName: string;
  inviteCode: string;
}

interface ActiveTeamRequest {
  teamId: number;
}

interface JoinTeamRequest {
  userId: number;
  inviteCode: string;
}

interface UserTeamsData {
  teams: TeamListItem[];
}

export interface TeamMember {
  userId: number;
  nickname: string;
}

export interface TeamListItem {
  teamId: number;
  teamName: string;
  memberCount: number;
}

export interface TeamDetail {
  teamId: number;
  teamName: string;
  inviteCode: string;
  totalBricks: number;
  members: TeamMember[];
}

export function createTeam(teamName: string) {
  const userId = getUserId();

  if (userId === null) {
    throw new Error("로그인이 필요합니다.");
  }

  return apiPost<CreateTeamData, CreateTeamRequest>(
    "/api/teams",
    {
      userId,
      teamName,
    }
  );
}

export function updateActiveTeam(teamId: number) {
  const userId = getUserId();

  if (userId === null) {
    throw new Error("로그인이 필요합니다.");
  }

  return apiPatch<string, ActiveTeamRequest>(
    `/api/users/${userId}/active-team`,
    {
      teamId,
    }
  );
}

export function joinTeam(inviteCode: string) {
  const userId = getUserId();

  if (userId === null) {
    throw new Error("濡쒓렇?몄씠 ?꾩슂?⑸땲??");
  }

  return apiPost<CreateTeamData, JoinTeamRequest>(
    "/api/teams/join",
    {
      userId,
      inviteCode,
    }
  );
}

export function getUserTeams() {
  const userId = getUserId();

  if (userId === null) {
    throw new Error("濡쒓렇?몄씠 ?꾩슂?⑸땲??");
  }

  return apiGet<UserTeamsData>(`/api/users/${userId}/teams`);
}

export function getTeamDetail(teamId: number) {
  return apiGet<TeamDetail>(`/api/teams/${teamId}`);
}
