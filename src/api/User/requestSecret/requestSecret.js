import { generateSecret } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default{
    Mutation:{
        requestSecret: async(_,args) => {
            const {email} = args;
            const loginSecret = generateSecret();
            console.log(loginSecret)
            //update user
            // email이 같은 사람을 찾아서 loginSecret를 업데이트
            try{
                await prisma.updateUser({
                    data:{loginSecret},where:{email}
                })
                return true;
            }
            catch (e){
                console.log(e)
                return false;
            }

        }
    }
}