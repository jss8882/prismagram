import {prisma} from "../../../../generated/prisma-client"
export default {
    Query:{
        // 첫번째 인자는 아무것도 받지 않고 두번째 인자는 args라고 함
        userById: async(_,args)=>{
            const {id } = args;
            // user(id:id)는  user({id})로 줄일수 있음
            return await prisma.user({ id });
        }
    }
}