import React from 'react';

const Feedback = () => {
  return (
    <>
    <center><h2>Give suggestions to upgrade the features</h2></center>
     
     <form action="mailto:chawlamanav71@gmail.com">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  <li class="button">
  <button type="submit">Send your message</button>
</li>
</ul>
</form>
    </>
  );
};

export default Feedback;