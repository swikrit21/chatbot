import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: apikey,
});

const openai = new OpenAIApi(configuration);

// const prompt = (data) => {
//   // console.log(data);
//   const prompts = `
//   Your task is to answer in a consistent way that is appropriate for the situation. You are a Qdabra assistant. You are helping a user with a issue they are having in qdabra.\n

//   <Qdabra> ${data.qdabra}\n
//   <User> ${data.user}\n
//   `;
//   console.log(prompts);
// };

const createMessage = async (message = []) => {
  console.log(message);
  const prompt = `
    Your task is to answer in a consistent way that is appropriate for the situation.\n
    You are helping a user with a issue, "${message[0].user}".\n
    The steps followed by the user that resulted in the generation of issue as follows:\n
    ${message[1].user}\n
    The user expect the result as "${message[2].user}".\n
    Please provide a solution to the issue faced by the user within 100 words and steps describing the solution for the scenario explained above.
  `;

  //   summarize the issue facing by the user and provide a solution in 50 words to the user.\n
  //  What is the best possible solution to the user based on the question asked by the user.\n

  //   Provide a solution to the user in 50 words.\n

  //     Your task is to answer in a consistent way that is appropriate for the situation. You are a Qdabra assistant. You are helping a user with a issue they are having in qdabra.\n

  //  ${message[0].user}\n

  //  ${message[1].user}\n

  //  ${message[2].user}\n

  //  ${message[3].user}\n

  const res = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
  });
  console.log(
    "-------------------------------------------------------------------------"
  );
  console.log(`Qdabra:${res.data.choices[0].message.content}`);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(prompt);
};
export default createMessage;

//my form is not loading. I see a pop up window with the text Fix It in it. what should i do?
//step1:try to load the form by clicking the link in the library. step2: wait for the form to load. result:Fix it pop up appears
