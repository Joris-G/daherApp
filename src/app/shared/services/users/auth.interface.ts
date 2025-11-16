import { User } from "src/app/_interfaces/user";

export interface AuthUser { 
    token: string; 
    user: User; 
}