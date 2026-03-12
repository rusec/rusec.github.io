export type userDoc = {
  username: string;
  password_hash: string;
  admin: boolean;
};

export interface PostData {
  title: string;
  date: string;
  image: string;
  author: string;
  description: string;
}

export interface Post {
  slug: string;
  data: PostData;
  content: string;
}

export type Activity = {
  _id: string;
  title: string;
  subtitle: string;
  location: string;
  date: number;
  description: string;
  picture_url: string | undefined;
};
export interface ActivityRequest {
  title: string;
  subtitle: string;
  location: string;
  date: number;
  picture: undefined | Blob | File;
  description: string;
  picture_name: string | undefined;
}

export type Event = {
  title: string;
  date: number;
  month: number;
};
export interface Info {
  motd: string;
  alert: string;
  lastUpdated: number;
}
