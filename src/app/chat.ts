// 2.Import
import { LiveChat } from "youtube-chat";
import app from "electron";

// 3. Create instance with ChannelID or LiveID
// const liveChat = new LiveChat({channelId: "CHANNEL_ID_HERE"})
// const liveChat = new LiveChat({liveId: "LIVE_ID_HERE"})
const liveChat = new LiveChat({ liveId: "F2qoxW9RA9w" });

// 4. Add events
// Emit at start of observation chat.
// liveId: string
liveChat.on("start", (liveId) => {
  /* Your code here! */
});

// Emit at end of observation chat.
// reason: string?
liveChat.on("end", (reason) => {
  /* Your code here! */
});

// Emit at receive chat.
// chat: ChatItem
liveChat.on("chat", (chatItem) => {
  /* Your code here! */
});

// Emit when an error occurs
// err: Error or any
liveChat.on("error", (err) => {
  /* Your code here! */
});

// 5. Start
