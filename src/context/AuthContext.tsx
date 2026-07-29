import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";


type User = {
  fullName: string;
  email: string;
  role: "student" | "admin";
};



type AuthContextType = {

  user: User | null;

  users: User[];

  isLoading: boolean;

    refreshUsers: () => void;


  login: (user: User) => void;

  logout: () => void;

};



const AuthContext =
  createContext<AuthContextType | null>(null);



export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [user,setUser] =
    useState<User | null>(null);



  const [users,setUsers] =
    useState<User[]>([]);



  const [isLoading,setIsLoading] =
    useState(true);




  useEffect(()=>{


    const storedUsers =
      localStorage.getItem(
        "findit-users"
      );


    const storedUser =
      localStorage.getItem(
        "findit-user"
      );



    if(storedUsers){

      setUsers(
        JSON.parse(storedUsers)
      );

    }



    if(storedUser){

      setUser(
        JSON.parse(storedUser)
      );

    }



    setIsLoading(false);



  },[]);






  const login = (user:User)=>{


    localStorage.setItem(
      "findit-user",
      JSON.stringify(user)
    );


    setUser(user);


  };






  const logout = ()=>{


    localStorage.removeItem(
      "findit-user"
    );


    setUser(null);


  };



 
  const refreshUsers = () => {

    const storedUsers =
      JSON.parse(
        localStorage.getItem("findit-users") || "[]"
      );

    setUsers(storedUsers);

  };



  return (

    <AuthContext.Provider

      value={{

        user,

        users,

        isLoading,

        refreshUsers,

        login,

        logout,

      }}

    >

      {children}

    </AuthContext.Provider>

  );


}






export function useAuth(){


  const context =
    useContext(AuthContext);



  if(!context){

    throw new Error(
      "useAuth must be used inside AuthProvider"
    );

  }



  return context;


}