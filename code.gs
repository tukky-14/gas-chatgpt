const apikey =
  PropertiesService.getScriptProperties().getProperty("OPENAI_API_KEY");
const model = "gpt-3.5-turbo";
// const model = "gpt-4";
const temperature = 0.5;
const url = "https://api.openai.com/v1/chat/completions";

function GPT(content, maxTokens = 2048) {
  if (content) {
    const requestBody = {
      model: model,
      messages: [{ role: "user", content: content }],
      temperature: temperature,
      max_tokens: maxTokens,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apikey,
      },
      payload: JSON.stringify(requestBody),
    };

    const response = JSON.parse(
      UrlFetchApp.fetch(url, requestOptions).getContentText()
    );

    return response.choices[0].message.content.trim();
  } else {
    return "no result";
  }
}
