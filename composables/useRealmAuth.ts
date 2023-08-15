import * as Realm from "realm-web";

export const useRealmAuth = () => {

    const app = new Realm.App({ id: "vyre-ixkvi" });

    const register = async(email:string, password:string)=>{
        await app.emailPasswordAuth.registerUser({ email, password });
    }

    const confirmUser = async(token:string, tokenId:string)=>{
        await app.emailPasswordAuth.confirmUser({ token, tokenId });
    }

    return{
       register,
       confirmUser
    }
        
}