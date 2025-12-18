// PHRASE UNLOCK
function unlock() {
  const phrase = document.getElementById("phrase").value.toLowerCase().trim();
  const correctPhrase = "princess"; // Change to your phrase

  if (phrase === correctPhrase) {
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText = "Hmm… not quite right. Try again.";
  }
}

// MOOD → MESSAGES
function goToMessages(mood) {
  localStorage.setItem("mood", mood);
  window.location.href = "messages.html";
}

// MESSAGES BY MOOD
const moodMessages = {
  tired: ["Rest doesn’t mean you’re giving up, it's okay to take a few steps back and breathe. You are gonna accomplish everything you set out to be, there's no question there my love. It might not always seem like it but you definitely will.",
"You’re not your failures nor are you your setbacks, you're a sum of everything you have accomplished and done regardless of how hard it got. You glow my baby, everything is gonna be okay.",
"I see how much you carry and I'm proud of you for it.",
"You is smart, you is kind, you is important(I hope you get the reference)",
"If all you can do today is exist, that’s enough. You’ve done more than you realize, even if it doesn’t feel like it."],

  overthinking: ["Not every thought deserves your energy love. Some are just clouds passing through your sky, notice them then let them go. You don’t have to chase every worry or carry every “what if.” Focus on the things that make you feel alive, calm, and steady, and leave the rest behind. I know it's easier said than done but i know you can do it.",
"Overthinking doesn’t mean you’re weak or broken, it means you feel deeply. You don’t need clarity or certainty right now; you just need gentleness. I’m here with you, and we can take this one breath at a time.",
"I know your mind is racing and every little thing feels bigger than it is. It makes sense, you’re feeling and thinking so deeply, that’s who you are. You don’t have to figure it all out right now; it’s okay to pause and just notice the thoughts without getting pulled in. You’re allowed to rest, even when your mind wants to keep going.",
"I know you’re replaying things and questioning every detail. That doesn’t mean anything is wrong with you, it just means your heart is active. You can pause with me for a moment and let your thoughts slow down at their own pace.",
"I’m quietly beside you even when you can't see it."],

  heavy: ["Some days just weigh on us, it's normal don't beat yourself up because of it",
"You don’t have to explain your sadness, but if you want to I will always listen",
"I’d sit in silence with you. I'm here to lighten the load and I hope you let me ",
"Your feelings are never too much.",
"You are not alone in this, you can always lean on me"],

  miss: ["Every inch of you are perfect, there is nothing wrong with. Every single change and every single phase that your mind and body take on or go through they are still perfect  "
,"I know you’re feeling unsure of yourself right now, but I see you and I see all the amazing things about you. You don’t need to compare or question yourself; you’re exactly enough as you are.",
"You are beautiful, you are smart, you are amazing, you are sexy, you are fierce, you are extraordinary, you are loved ",
"You don’t have to prove yourself to anyone, not even to yourself. You are seen, wanted, and cherished exactly as you are right now.",
"It’s okay to feel small or unsure sometimes. Just remember, your worth isn’t tied to anyone’s opinion or any single moment—you’re more than enough."]
};

// SHOW MESSAGES WITH FADE-IN
function showMessage(number){
  const mood = localStorage.getItem("mood");
  const messageBox = document.getElementById("messageBox");
  const hour = new Date().getHours();
  let message = moodMessages[mood][number-1];
  if(number===5 && (hour>=21 || hour<5)){
    message = "Late at night, I hold you in my thoughts, softly.";
  }

  messageBox.classList.remove("show");
  messageBox.classList.add("fade-in");
  messageBox.innerText = message;
  setTimeout(()=>messageBox.classList.add("show"),50);
}

// HIDDEN 6TH NUMBER
window.onload = function(){
  const hour = new Date().getHours();
  const sixth = document.getElementById("sixth");
  if(sixth && (hour>=22 || hour<5)) sixth.style.display="flex";
};

function showHidden(){
  const messageBox = document.getElementById("messageBox");
  messageBox.classList.remove("show");
  messageBox.classList.add("fade-in");
  messageBox.innerText = "This one only appears when the world is quiet. I love you — endlessly and softly.";
  setTimeout(()=>messageBox.classList.add("show"),50);
}
