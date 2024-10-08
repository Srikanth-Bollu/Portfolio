import Boxmodel from "./Boxmodel";
import Button_1 from "./Button_1";

function Box() {
  return (
    <div className=" w-full h-full ">
      <h1 className=" text-4xl font-medium capitalize text-center  max-sm:text-3xl max-sm:p-2.5 max-sm:mt-20">
        what i know
      </h1>
      <div className=" w-full h-full flex max-sm:flex-col max-sm:px-2">
        <Boxmodel heading={"Frontend"}>
          <Button_1 name={"html"} border={"b"} />
          <Button_1 name={"css"} border={"v"} />
          <Button_1 name={"js"} border={"b"} />
          <Button_1 name={"react.js"} border={"v"} />
          <Button_1 name={"ts"} border={"b"} />
          <Button_1 name={"next.js"} border={"v"} />
          <Button_1 name={"tailwind"} border={"b"} />
        </Boxmodel>
        <Boxmodel heading={"Backend"}>
          <Button_1 name={"node"} border={"v"} />
          <Button_1 name={"express"} border={"b"} />
          <Button_1 name={"jwt"} border={"v"} />
          <Button_1 name={"nextauth"} border={"b"} />
        </Boxmodel>
        <Boxmodel heading={"Software Engineer"}>
          <Button_1 name={"Python"} border={"v"} />
          <Button_1 name={"Data Structures"} border={"b"} />
          <Button_1 name={"Algorithms"} border={"v"} />
          <Button_1 name={"Mysql"} border={"b"} />
          <Button_1 name={"Mongodb"} border={"v"} />
          <Button_1 name={"git"} border={"b"} />
        </Boxmodel>
        <Boxmodel heading={"Other"}>
          <Button_1 name={"postman"} border={"b"} />
          <Button_1 name={"restapi"} border={"v"} />
          <Button_1 name={"psql"} border={"b"} />
          <Button_1 name={"vscode"} border={"v"} />
          <Button_1 name={"pycharm"} border={"b"} />
          <Button_1 name={"git hub"} border={"v"} />
        </Boxmodel>
      </div>
    </div>
  );
}

export default Box;
