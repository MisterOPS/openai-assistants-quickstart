export let assistantId = "asst_AQ1GGmoxkgUdGjTiEry8pt4Y"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
