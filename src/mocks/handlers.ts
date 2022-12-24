import {rest} from "msw";
import { listPostsMocked } from "./mockPosts";
export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/posts", (req,res,ctx)=>
    {
        return res(
        ctx.json(listPostsMocked))
    }),

]