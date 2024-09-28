function getBotResponse(input){
  //FOR ADMISSION ENQUIRIES
  if (input == "What is your cut off mark for new students"){
    return "The university cut off mark for any average student is 170";
  }

  else if (input == "I would like to make admission enquiries about the university"){
  	return "Thanks.. what would you like to know";
  }

  else if (input == "What documents are required of me when entering the university"){
  	return "You would be required to come with:<li>O-level result WAEC and NECO Included</li> <li>Your original Jamb Print out slip</li><li>4 Passport photos</li><li>Your birth certificate</li>"
  }






//FOR HOSTEL ENQUIRIES
else if (input == "I would like to make enquiries concerning the room accomodation"){
 return "Please follow the link for more instructions";
}



else if(input =="Please how much is the university fee for sociology department" 
  || input ==  "please how much is the university fee for sociology department?"  
  || input == "please how much is your school fees?"){
	return "Our School fees template is as follows <img src = './pix/fee2.jpg' width = '200px' height = 'auto'>";
}

/*else if(input == "yes" 
|| input == "Yes" 
|| input == "YES" 
|| input = "May I see a list of you school fees"){
return "<img src = './pix/fee1.jpg' width = '200px' height = 'auto'>";
}*/

else if(input == "Can students stay off campus?"){
  return "No, Hostels are are available on campus with conducive enviroments a student need to aid his/her success.";
}

else if(input == "Do, I get allocated to my room based on the amount I pay for room?"){
  return "No, we believe in equality, so we equal room patter to every student";  
}


else if(input == "Is it compulsory to stay in the School Hostel?"){
  return " Yes, very compulsory. t is safe and stress free for you";
}


else if(input == "How are the lecturers?"){
  return "Pretty, Amazing and experts in thir fields";
}



else if(input == "How many Faculties exsist in PLI?"){
  return "Only two, And they are College of basic applied science (CBAS)and college of Humanities(CHMS)";
}


else if (input == "Hello"){
return "Hi";
}


else if (input == "How far?"){
return "Not too far from your finger tips";
}



else if (input == "Who Are you?"){
return "I am a bot created by Onoja Joseph a pioneer student as his final year project to provide answers being asked about the school";
}


else if(input == "How can I Proceed to pay my Acceptance Fee as a Fresh Student?"){
 return "Kindly follow this link to view the procedure <a href = 'About.html'>Fees and Logistics</a>";
}



 
 else if (input == "Alright" || "Thank you" || "Alright thank you"){
	return "You are welcome, let me know how i can assist you anytime!";
}



else {
	return "Please visit the university home page get all the necessary information ou may need or call +2349168461718 for more clarity";
}

}