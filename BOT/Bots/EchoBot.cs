// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Bot.Builder;
using Microsoft.Bot.Schema;
using System.Net.Http;
using System.Text;

namespace Microsoft.BotBuilderSamples.Bots
{
    public class EchoBot : ActivityHandler
    {
        protected override async Task OnMessageActivityAsync(ITurnContext<IMessageActivity> turnContext, CancellationToken cancellationToken)
        {
            using (HttpClient client = new HttpClient())
            {
                //Assuming that the api takes the user message as a query paramater
                string RequestURI = "https://msftbotinnovservice.azurewebsites.net/api/location"  ;
                var loc = new Location();
                loc.location = turnContext.Activity.Text;
                
                HttpResponseMessage responsemMsg = await client.PostAsJsonAsync(RequestURI, loc);
                if (responsemMsg.IsSuccessStatusCode)
                {
                    var apiResponse = await responsemMsg.Content.ReadAsStringAsync();

                    //Post the API response to bot again
                    await turnContext.SendActivityAsync(MessageFactory.Text($"Response is {loc}", $"Response is {apiResponse}"), cancellationToken);

                }
            }

            await turnContext.SendActivityAsync("Thanks for updating your destination as " + turnContext.Activity.Text);
            // var replyText = $"Echo: {turnContext.Activity.Text}";
            // await turnContext.SendActivityAsync(MessageFactory.Text(replyText, replyText), cancellationToken);
        }

        public class Location
    {
        public string location { get; set; }
    }

        protected override async Task OnMembersAddedAsync(IList<ChannelAccount> membersAdded, ITurnContext<IConversationUpdateActivity> turnContext, CancellationToken cancellationToken)
        {
            
            var welcomeText = "Hello and welcome!, Please enter your destination";
            foreach (var member in membersAdded)
            {
                if (member.Id != turnContext.Activity.Recipient.Id)
                {
                    await turnContext.SendActivityAsync(MessageFactory.Text(welcomeText, welcomeText), cancellationToken);
                }
            }
        }
    }
}
