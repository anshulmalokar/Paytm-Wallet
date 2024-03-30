import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@repo/db/client";
import bcrypt from "bcrypt"
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              phone: { label: "Phone Number", type: "text", placeholder: "982330875" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const phone = credentials?.phone;
                const hashedPassword = await bcrypt.hash(credentials?.password,10);
                
                const existingUser = await prisma.user.findFirst({
                  where:{
                    number : phone
                  }
                })

                if(existingUser){
                  const passwordValidation = await bcrypt.compare(credentials?.password,existingUser.password);
                  if(passwordValidation){
                    return {
                      id: existingUser.id.toString(),
                      name: existingUser.name,
                      email: existingUser.email
                    };
                  }
                  return null;
                }
                
                try{
                  const data1 = await prisma.user.create({
                    data:{
                      number: phone || '',
                      password: hashedPassword
                    }
                  })
                  return {
                    id: data1.id.toString(),
                    name: data1.name,
                    number: data1.number
                  }
                }catch(e){
                  console.log(e)
                }
                return null;
            }
          })
    ],
    secret: process.env.JWT_SECRET || "secret",
  }
