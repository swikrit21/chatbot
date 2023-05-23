import readline from "readline";
import createMessage from "./chatOpenai.js";

const convo = {
  QdabraassistantOne: "What is the issue?\n",

  Qdabraassistanttwo:
    "What were the action you take before experiencing the issue?\n",

  Qdabraassistantthree: "What is your expected result?\n",
};

const assistant = [];

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptAssistant = () => {
  userInterface.question(`Qdabra:${convo.QdabraassistantOne} `, (user) => {
    assistant.push({ qdabra: convo.QdabraassistantOne, user });

    console.log(
      "------------------------------------------------------------------------"
    );
    if (user === "no" || user === "No") {
      console.log("Thank you for using Qdabra's assistant");
      userInterface.close();
    } else {
      userInterface.question(`Qdabra:${convo.Qdabraassistanttwo} `, (user) => {
        assistant.push({ qdabra: convo.Qdabraassistanttwo, user }); //mistake

        console.log(
          "------------------------------------------------------------------------"
        );
        if (user === "no" || user === "No") {
          console.log("Thank you for using Qdabra's assistant");
          userInterface.close();
        } else {
          userInterface.question(
            `Qdabra:${convo.Qdabraassistantthree}`,
            (user) => {
              assistant.push({ qdabra: convo.Qdabraassistantthree, user });
              console.log(
                "------------------------------------------------------------------------"
              );

              if (user === "no" || user === "No") {
                console.log("Thank you for using Qdabra's assistant");
                userInterface.close();
              } else {
                createMessage(assistant);
                userInterface.close();
              }
            }
          );
        }
      });
    }
  });
};
promptAssistant();

userInterface.prompt();
