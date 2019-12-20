    const ATTACK = 1;
    const DEFEND = 2;
    const DODGE = 3;
    const NEGOTIATE = 4;
    const PLAY_DEAD = 2;
    const GRAB_ROCK = 3;
    const APPROACH = 2;
    const CONTINUE = 1;
    const INVESTIGATE = 2;
    const RING_BELL = 2;
    const WSWAP = 1;
    const WLEAVE = 2;
    const LEFT = 1;
    const RIGHT = 2;
    const BURN_WOUND = 1;
    const LEAVE_WOUND = 2;
    //boolean to check win/lose
    var win;
    var winlist = [];
    var count = 0;
    //random number to choose wich version of level is played
    var rnumber = Math.floor(Math.random() * 10) + 1;
    var plays = 0;
    var alttier = 0;
    var check = true;
    var level_complete = false;
    
    /**
     * function returns a response and updates the background image for the scene
     * @param tier
     * @param choice
     */
    function response(tier, choice){
        //set win to true at start to allow next tier
        win = true;
        //opening story to set the stage for the game and introduce options
        if(tier == 0){
            document.getElementById("story").innerHTML = "You wake up in a dimly lit dungeon. You are surrounded by your"
                            + "fellow comrades lying lifeless on the ground. All"
                            + "weapons, armor and supplies have been stripped from "
                            + "you and your team. A failed group of adventures has "
                            + "wiped out your camp in the night in desperation to "
                            + "fill their needs. Your appearance, soaked in the "
                            + "blood of one of your comrades has, saved you for now, "
                            + "but a lone member has stayed behind.  His orders are "
                            + "to snuff out the lights and any survivors and follow close behind. ";
            document.getElementById("graphic").style.backgroundImage = "url('images/scene1.jpg')";
        }
        if(tier == 1){
            switch(choice){
                case ATTACK:
                    document.getElementById("story").innerHTML = "The enemy has called for help and his "
                            + "group is in range to hear him. "
                            + "You are easily defeated.";
                    //add to failscreen
                    document.getElementById("failresult").innerHTML = "The enemy has called for help and his "
                            + "group is in range to hear him. "
                            + "You are easily defeated.";
                    break;
                case PLAY_DEAD:
                    document.getElementById("story").innerHTML = "The enemy searches a body to your left, "
                            + "he is facing your direction but is distracted. "
                            + "He flings a rock in his way that lands by your feet. "
                            + "Fortune shines upon you. "
                            + "You have a weapon in reach "
                            + "that may give an advantage. ";
                    break;
                    
            }
        }
        if(tier == 2){
            switch(choice){
                case ATTACK:
                    document.getElementById("story").innerHTML = "The enemy has called for help and his group "
                            + "is in range to hear him. You are easily defeated.";
                    //add to failscreen
                    document.getElementById("failresult").innerHTML = "The enemy has called for help and his group "
                            + "is in range to hear him. You are easily defeated.";
                    break;
                case PLAY_DEAD: //win choice
                    document.getElementById("story").innerHTML = "One of your comrades begins coughing. It "
                            + "turns out you were not the only one lucky enough "
                            + "\nto survive, but the enemy is alerted and has rushed "
                            + "to your friend and is holding a dagger high ready to strike. ";
                    break;
                case GRAB_ROCK:
                    document.getElementById("story").innerHTML = "The enemy sees you and has called for help "
                            + "and his \ngroup is in range to hear him. You are easily defeated.";
                    //add to failscreen
                    document.getElementById("failresult").innerHTML = "The enemy sees you and has called for help "
                            + "and his \ngroup is in range to hear him. You are easily defeated.";
                    break; 
                   
            }
        }
        if(tier == 3){
            switch(choice){
                case ATTACK:
                    document.getElementById("story").innerHTML = "The enemy is caught off guard but is armed. "
                            + "He withstands your attack and runs you through with his blade. ";
                    //add to failscreen
                    document.getElementById("failresult").innerHTML = "The enemy is caught off guard but is armed. "
                            + "He withstands your attack and runs you through with his blade. ";
                    break;
                case PLAY_DEAD:
                    document.getElementById("story").innerHTML = "Your friend was killed. The enemy "
                            + "is weary of more survivors and takes no chances. "
                            + "He plunges the dagger into your chest.";
                    //add to failscreen
                    document.getElementById("failresult").innerHTML = "Your friend was killed. The enemy "
                            + "is weary of more survivors and takes no chances. "
                            + "He plunges the dagger into your chest.";
                    break;
                case GRAB_ROCK:
                    document.getElementById("story").innerHTML = "You now have a weapon and the enemy still "
                            + "is unaware of you, but your friend was killed. The "
                            + "\nenemy has his back turned but maybe not for long.";
                    break; 
                    
            }
        }
        if(tier == 4){
            switch(choice){
                case ATTACK:
                    document.getElementById("story").innerHTML = "Success! A fatale strike to the back of"
                            + " the enemy’s head drops him lifeless to the ground. "
                            + "\nYou have inherited a dagger and a leather arm strap for defense."
                            + "\n\nThis is a treacherous position you find yourself in. "
                            + "\nThese adventurers that have slain your comrades are "
                            + "\nescaping out of the dungeon. With little provisions, you will not "
                            + "\nsurvive this place. Your only hope is follow the distant light "
                            + "\ncast by the enemy group."
                            + "\n\nFollow the enemy"
                            + "\nTake your revenge"
                            + "\nSurvive"
                            + "\nEscape the dungeon"
                            + "\n\nYou move through the dimly lit corridor with streaks of blood across" 
                            + " the walls toward the "
                            + "\ndistant light, but a shadowy figure blocks your path. "
                            + "\nOnce you move closer, you hear a child in a tattered "
                            + "\ndress crying and curled up to the wall.";
                    document.getElementById("graphic").style.backgroundImage = "url('images/scene4.jpg')";
                    break;
                case PLAY_DEAD:
                    document.getElementById("story").innerHTML = "The enemy is weary of more survivors"
                            + " and takes no chances. He plunges the dagger into your chest.";
                    document.getElementById("failresult").innerHTML = "The enemy is weary of more survivors"
                            + " and takes no chances. He plunges the dagger into your chest.";
                    break;
                    
            }
        }
        if(tier == 5){
            switch(choice){
                case ATTACK:
                    document.getElementById("story").innerHTML = "Your blade slices through the child like butter. You fiend!"
                            + "But look closer. \nIt is a NORFOLK, a small "
                            + "creature with sharp claws dripping with a green substance."
                            + "\nAs you continue your journey, you come across a new passage."
                            + "\nIn the distance of this passage, you hear the faint sound of drums."
                            + "\nThe bastard party's light is ahead. A new passage is to your right.";
                    document.getElementById("graphic").style.backgroundImage = "url('images/tunnel1.jpg')";
                    break;
                case APPROACH:
                    document.getElementById("story").innerHTML = "The sharp pain of a claw is felt slicing "
                            + "across your chest. \nA NORFOLK has caught you with its "
                            + "poisoned claw. Death is instant. "
                            + "\nWarning: beware the NORFOLK – these small clever "
                            + "creatures have been known to disguise themselves as "
                            + "humans to lure in prey. ";
                    document.getElementById("failresult").innerHTML = "The sharp pain of a claw is felt slicing "
                            + "across your chest. \nA NORFOLK has caught you with its "
                            + "poisoned claw. Death is instant. "
                            + "\nWarning: beware the NORFOLK – these small clever "
                            + "creatures have been known to disguise themselves as "
                            + "humans to lure in prey. ";
                    break;
                   
            }
        }
        if(tier == 6){
            switch(choice){
                case CONTINUE:
                    document.getElementById("story").innerHTML = "You come to a mysterious large bell affixed "
                            + "to the wall marked with the number 1 next to it.";
                    document.getElementById("graphic").style.backgroundImage = "url('images/bell.jpg')";
                    break;
                case INVESTIGATE:
                    document.getElementById("story").innerHTML = "You find a horde of armed feral creatures. "
                            + "They swarm and kill you. \n\nWarning: beware the sound "
                            + "of drums – a lone adventurer cannot take on these mysterious hordes." ;
                    document.getElementById("failresult").innerHTML = "You find a horde of armed feral creatures. "
                            + "They swarm and kill you. \n\nWarning: beware the sound "
                            + "of drums – a lone adventurer cannot take on these mysterious hordes." ;
                    break;
                   
            }
        }
        if(tier == 7){
            switch(choice){
                case CONTINUE:
                    document.getElementById("story").innerHTML = "You come across another passage, but you "
                            + "will not be able to investigate it without a torch. "
                            + "\nYou continue on but are struck from behind. You "
                            + "stumble forth and turn around to see a man holding "
                            + "\na long blade. He has the eyes of the deranged, and "
                            + "is covered in filth. “We should never have entered "
                            + "\nthis cursed place”, He said. “We are all damned. "
                            + "Death is a mercy in the face of this impending "
                            + "\nsuffering. I grant you mercy.” The deranged man comes "
                            + "at you swinging his blade wildly.";
                    document.getElementById("graphic").style.backgroundImage = "url('images/scene6.jpg')";
                    break;
                case RING_BELL:
                    document.getElementById("story").innerHTML = "The deafening sound of the bell echoes through "
                            + "the dungeon, and attracts the DRUMS. \nYou are defeated by the DRUMS.";
                    document.getElementById("failresult").innerHTML = "The deafening sound of the bell echoes through "
                            + "the dungeon, and attracts the DRUMS. \nYou are defeated by the DRUMS.";
                    break;
                    
            }
        }
        if(tier == 8){
            switch(choice){
                case ATTACK:
                    document.getElementById("story").innerHTML = "Defeat – the enemy’s blade swings true. You could not close the distance.";
                    document.getElementById("failresult").innerHTML = "Defeat – the enemy’s blade swings true. You could not close the distance.";
                    break;
                case DEFEND:
                    document.getElementById("story").innerHTML = "Success! You have deflected the strike with your arm strap. The enemy is open.";
                    break;
                case DODGE:
                    document.getElementById("story").innerHTML = "Defeat – the wild swings of the enemy have caught you with a fatal strike.";
                    document.getElementById("failresult").innerHTML = "Defeat – the wild swings of the enemy have caught you with a fatal strike.";
                    break;   
            }
        }
        if(tier == 9){
            switch(choice){
                case ATTACK:
                    document.getElementById("story").innerHTML = "Success! The thrust of the dagger makes "
                            + "your opponent scream in pain and then fall dead to "
                            + "\nthe ground. The poor soul has left nothing behind "
                            + "of value but the sword he used to attack you. The "
                            + "\nweapon he wielded is unlike any human sword. It has "
                            + "strange curves in the blade, a black blade, and strange markings on the handle.";
                    document.getElementById("graphic").style.backgroundImage = "url('images/cursesword.jpg')";
                    break;
                case DEFEND:
                    document.getElementById("story").innerHTML = "The enemy regains composer and strikes around your guard, striking you dead.";
                    document.getElementById("failresult").innerHTML = "The enemy regains composer and strikes around your guard, striking you dead.";
                    break;
                case DODGE:
                    document.getElementById("story").innerHTML = "The enemy regains composure and strikes you dead.";
                    document.getElementById("failresult").innerHTML = "The enemy regains composure and strikes you dead.";
                    break;   
            }
        }
        if(tier == 10){
            switch(choice){
                case WSWAP:
                    document.getElementById("story").innerHTML = "You have traded a dagger for a sword. \nThe "
                            + "bastard party’s light has stopped. For how long, is "
                            + "\nunknown. The obstacle you faced distracted from the "
                            + "light. Have they made camp? Have they already come "
                            + "\nto the exit? No matter, you must investigate. You "
                            + "head toward the light, but feel a growing dread with "
                            + "\neach step. This dungeon now seems impossible to escape "
                            + "and to frightening to endure. You are driven mad by this "
                            + "\nfear and run back into the darkness, and lose yourself "
                            + "to the terrors of the dungeon.";
                    document.getElementById("failresult").innerHTML = "You have traded a dagger for a sword. \nThe "
                            + "bastard party’s light has stopped. For how long, is "
                            + "\nunknown. The obstacle you faced distracted from the "
                            + "light. Have they made camp? Have they already come "
                            + "\nto the exit? No matter, you must investigate. You "
                            + "head toward the light, but feel a growing dread with "
                            + "\neach step. This dungeon now seems impossible to escape "
                            + "and to frightening to endure. You are driven mad by this "
                            + "\nfear and run back into the darkness, and lose yourself "
                            + "to the terrors of the dungeon.";
                    break;
                case WLEAVE:
                    document.getElementById("story").innerHTML = "The bastard party’s light has stopped. For "
                            + "how long it stopped moving, it is unknown. The "
                            + "\nobstacle you faced distracted from the light. Have "
                            + "they made camp? Have they already come to the exit? "
                            + "\nNo matter, you must investigate. Cautiously, you "
                            + "approach the light. No man is found. What you find "
                            + "\nis a single lit torch on the dungeon wall above a "
                            + "piece of parchment. The parchment reads, “Marius, "
                            + "\nyou fool. You were warned we cannot stop. If the "
                            + "dungeon has not taken you already, meet us at "
                            + "\nDragonhead or die with the rest.” You have now "
                            + "acquired a torch. You are free to light your own "
                            + "\nway and relight the torches on your path, but the "
                            + "bastard party’s trail and your way out of the dungeon "
                            + "\nis lost. You must track them down. There are two paths "
                            + "ahead of you, a passage to the right and to the left.";
                    document.getElementById("graphic").style.backgroundImage = "url('images/messagetorch.jpg')";
                    break;
                  
            }
            level_complete = true;
        }
        //check if the choice matches the correct choice in winlist
        //change boolean win to false if not a match to initiate losing 
        if(winlist[tier] != choice){
            win = false;
        }
    }
    /*
    This function changes the text in the game buttons under choices.
    Parameter: tier - passes an integer to the function and outputs according text
    */
    function options(tier){
        if(tier == 1){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Play dead";
        document.getElementById("button3").style.display = "none";
        }
        if(tier == 2 || tier == 3){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Play dead";
        document.getElementById("button3").innerHTML = "Grab the rock";
        document.getElementById("button3").style.display = "block";
        }
        if(tier == 4){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Play dead";
        document.getElementById("button3").style.display = "none";
        }
        if(tier == 5){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Approach";
        
        }
        if(tier == 6){
        
        document.getElementById("button1").innerHTML = "Continue";
        document.getElementById("button2").innerHTML = "Investigate";
        
        }
        if(tier == 7){
        
        document.getElementById("button1").innerHTML = "Continue";
        document.getElementById("button2").innerHTML = "Ring the bell";
        
        }
        if(tier == 8){
        //combat mode begins
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Defend";
        document.getElementById("button3").innerHTML = "Dodge";
        document.getElementById("button3").style.display = "block";
        }
        if(tier == 9){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Defend";
        document.getElementById("button3").innerHTML = "Dodge";
        
        }
        if(tier == 10){
        
        document.getElementById("button1").innerHTML = "Weapon swap";
        document.getElementById("button2").innerHTML = "Leave it";
        document.getElementById("button3").style.display = "none";
        }
        if(tier == 11){
        
        document.getElementById("button1").innerHTML = "Left";
        document.getElementById("button2").innerHTML = "Right";
        
        }
    }
function options2(tier){
        if(tier == 1){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Play dead";
        document.getElementById("button3").style.display = "none";
        }
        if(tier == 2){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Play dead";
        document.getElementById("button3").innerHTML = "Grab the rock";
        document.getElementById("button3").style.display = "block";
        }
        if(tier == 4){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Dodge";
        document.getElementById("button3").style.display = "none";
        }
        if(tier == 5){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Approach";
        
        }
        if(tier == 6){
        
        document.getElementById("button1").innerHTML = "Continue";
        document.getElementById("button2").innerHTML = "Investigate";
        
        }
        if(tier == 7){
        
        document.getElementById("button1").innerHTML = "Continue";
        document.getElementById("button2").innerHTML = "Ring the bell";
        
        }
        if(tier == 8){
        //combat mode begins
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Defend";
        document.getElementById("button3").innerHTML = "Dodge";
        document.getElementById("button3").style.display = "block";
        }
        if(tier == 9){
        
        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Defend";
        document.getElementById("button3").innerHTML = "Dodge";
        
        }
        if(tier == 10){
        
        document.getElementById("button1").innerHTML = "Weapon swap";
        document.getElementById("button2").innerHTML = "Leave it";
        document.getElementById("button3").style.display = "none";
        }
        if(tier == 11){
        
        document.getElementById("button1").innerHTML = "Burn Wound";
        document.getElementById("button2").innerHTML = "Leave Wound";
        
        }
        if(tier == 12){

            document.getElementById("button1").innerHTML = "Investigate";
            document.getElementById("button2").innerHTML = "Continue";

        }
    }

function response2(tier, choice){
    var winlist1 = [0, 2, 3, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1];
    var winlist2 = [0, 2, 3, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2];
    //set win to true at start to allow next tier
    win = true;
    //opening story to set the stage for the game and introduce options
    if(tier == 0){
        document.getElementById("story").innerHTML = "You wake up in a dimly lit dungeon. You are surrounded by your"
                        + "fellow comrades lying lifeless on the ground. All"
                        + "weapons, armor and supplies have been stripped from "
                        + "you and your team. A failed group of adventures has "
                        + "wiped out your camp in the night in desperation to "
                        + "fill their needs. Your appearance, soaked in the "
                        + "blood of one of your comrades has, saved you for now, "
                        + "but a lone member has stayed behind.  His orders are "
                        + "to snuff out the lights and any survivors and follow close behind. ";
        document.getElementById("graphic").style.backgroundImage = "url('images/scene1.jpg')";
    }
    if(tier == 1){
        switch(choice){
            case ATTACK:
                document.getElementById("story").innerHTML = "The enemy has called for help and his "
                        + "group is in range to hear him. "
                        + "You are easily defeated.";
                //add to failscreen
                document.getElementById("failresult").innerHTML = "The enemy has called for help and his "
                        + "group is in range to hear him. "
                        + "You are easily defeated.";
                break;
            case PLAY_DEAD:
                document.getElementById("story").innerHTML = "The enemy searches a body to your right, "
                        + "he is facing away from you and is distracted. "
                        + "He flings a rock in his way that lands by your side. "
                        + "Fortune shines upon you. "
                        + "You have a weapon in reach "
                        + "that may give an advantage. ";
                break;
        }
    }
    if(tier == 2){
        switch(choice){
            case ATTACK:
                document.getElementById("story").innerHTML = "The enemy has called for help and his group "
                        + "is in range to hear him. You are easily defeated.";
                //add to failscreen
                document.getElementById("failresult").innerHTML = "The enemy has called for help and his group "
                        + "is in range to hear him. You are easily defeated.";
                break;
            case PLAY_DEAD: 
                document.getElementById("story").innerHTML = "The enemy sees you as the next body to search. The enemy " 
                    + "stands over you menacingly. your ruse is easily seen up close. He strikes you down.";
                //add to failscreen
                document.getElementById("failresult").innerHTML = "The enemy sees you as the next body to search. The "
                    + "enemy stands over you menacingly. your ruse is easily seen up close. He strikes you down.";
                break;
            case GRAB_ROCK: //win
                document.getElementById("story").innerHTML = "Gods be praised! You are not revealed but "
                        + "the enemy does see you as the next body to search. The enemy stands over you mancaingly";
               
                break; 

        }
    }
    if(tier == 3){
        switch(choice){
            case ATTACK: //win
                document.getElementById("story").innerHTML = "The enemy is caught off guard. "
                        + "From your low position, you are able to smash his knee. He buckles and groans in pain. ";
                break;
            case PLAY_DEAD:
                document.getElementById("story").innerHTML = "The enemy sees through your acting up close and strikes" 
                    + "you down.";
                //add to failscreen
                document.getElementById("failresult").innerHTML = "The enemy sees through your acting up close and strikes" 
                    + "you down.";
                break; 

        }
    }
    if(tier == 4){
        switch(choice){
            case ATTACK: //win
                document.getElementById("story").innerHTML = "Success! A fatale strike to the back of"
                        + " the enemy’s head drops him lifeless to the ground. "
                        + "\nYou have inherited a dagger and a leather arm strap for defense."
                        + "\n\nThis is a treacherous position you find yourself in. "
                        + "\nThese adventurers that have slain your comrades are "
                        + "\nescaping out of the dungeon. With little provisions, you will not "
                        + "\nsurvive this place. Your only hope is follow the distant light "
                        + "\ncast by the enemy group."
                        + "\n\nFollow the enemy"
                        + "\nTake your revenge"
                        + "\nSurvive"
                        + "\nEscape the dungeon"
                        + "\n\nYou move through the dimly lit corridor toward the "
                        + "\ndistant light, but a shadowy figure blocks your path. "
                        + "\nOnce you move closer, you hear a child in a tattered "
                        + "\ndress crying and curled up to the wall.";
                document.getElementById("graphic").style.backgroundImage = "url('images/scene4.jpg')";
                break;
            case DODGE:
                document.getElementById("story").innerHTML = "The enemy staggers back and calls for his comrads."
                        + " You are easily defeated.";
                document.getElementById("failresult").innerHTML = "The enemy staggers back and calls for his comrads."
                        + " You are easily defeated.";
                break;

        }
    }
    if(tier == 5){
        switch(choice){
            case ATTACK:
                document.getElementById("story").innerHTML = "Your blade slices through the child like butter. You fiend!"
                        + " As you continue your journey, you come across a new passage."
                        + " In the distance of this passage, you hear the faint sound of drums."
                        + " The bastard party's light is ahead. A new passage is to your right.";
                document.getElementById("graphic").style.backgroundImage = "url('images/tunnel1.jpg')";
                break;
            case APPROACH:
                document.getElementById("story").innerHTML = "Please help me, sir, said the girl. \"I was playing" 
                    + " with my friends when a monster grabbed me and brought me down here. I fought free and ran but now" 
                    + " I do not know where to go.\" " 
                    + " As you continue your journey with this feightened child in tow, you come across a new passage."
                    + " In the distance of this passage, you hear the faint sound of drums."
                    + " The bastard party's light is ahead. A new passage is to your right.";
                
                break;

        }
    }
    if(tier == 6){
        switch(choice){
            case CONTINUE: //win
                document.getElementById("story").innerHTML = "You come to a mysterious large bell affixed "
                        + "to the wall marked with the number 1 next to it.";
                document.getElementById("graphic").style.backgroundImage = "url('images/bell.jpg')";
                break;
            case INVESTIGATE:
                document.getElementById("story").innerHTML = "You find a horde of armed feral creatures. "
                        + "They swarm and kill you. Warning: beware the sound "
                        + "of drums – a lone adventurer cannot take on these mysterious hordes." ;
                document.getElementById("failresult").innerHTML = "You find a horde of armed feral creatures. "
                        + "They swarm and kill you. \n\nWarning: beware the sound "
                        + "of drums – a lone adventurer cannot take on these mysterious hordes." ;
                break;

        }
    }
    if(tier == 7){
        switch(choice){
            case CONTINUE:
                document.getElementById("story").innerHTML = "You come across another passage, but you "
                        + "will not be able to investigate it without a torch. "
                        + "\nYou continue on but are struck from behind. You "
                        + "stumble forth and turn around to see a man holding "
                        + "\na long blade. He has the eyes of the deranged, and "
                        + "is covered in filth. “We should never have entered "
                        + "\nthis cursed place”, He said. “We are all damned. "
                        + "Death is a mercy in the face of this impending "
                        + "\nsuffering. I grant you mercy.” The deranged man comes "
                        + "at you swinging his blade wildly. The girl flees down the dark passage in fear.";
                document.getElementById("graphic").style.backgroundImage = "url('images/scene6.jpg')";
                break;
            case RING_BELL:
                document.getElementById("story").innerHTML = "The deafening sound of the bell echoes through "
                        + "the dungeon, and attracts the DRUMS. You are defeated by the DRUMS.";
                document.getElementById("failresult").innerHTML = "The deafening sound of the bell echoes through "
                        + "the dungeon, and attracts the DRUMS. You are defeated by the DRUMS.";
                break;

        }
    }
    if(tier == 8){
        switch(choice){
            case ATTACK:
                document.getElementById("story").innerHTML = "Defeat – the enemy’s blade swings true. You could not close the distance.";
                document.getElementById("failresult").innerHTML = "Defeat – the enemy’s blade swings true. You could not close the distance.";
                break;
            case DEFEND:
                document.getElementById("story").innerHTML = "Success! You have deflected the strike with your arm strap. The enemy is open.";
                break;
            case DODGE:
                document.getElementById("story").innerHTML = "Defeat – the wild swings of the enemy have caught you with a fatal strike.";
                document.getElementById("failresult").innerHTML = "Defeat – the wild swings of the enemy have caught you with a fatal strike.";
                break;   
        }
    }
    if(tier == 9){
        switch(choice){
            case ATTACK:
                document.getElementById("story").innerHTML = "Success! The thrust of the dagger makes "
                        + "your opponent scream in pain and then fall dead to "
                        + "\nthe ground. The poor soul has left nothing behind "
                        + "of value but the sword he used to attack you. The "
                        + "\nweapon he wielded is unlike any human sword. It has "
                        + "strange curves in the blade, a black blade, and strange markings on the handle.";
                document.getElementById("graphic").style.backgroundImage = "url('images/cursesword.jpg')";
                break;
            case DEFEND:
                document.getElementById("story").innerHTML = "The enemy regains composer and strikes around your guard, striking you dead.";
                document.getElementById("failresult").innerHTML = "The enemy regains composer and strikes around your guard, striking you dead.";
                break;
            case DODGE:
                document.getElementById("story").innerHTML = "The enemy regains composure and strikes you dead.";
                document.getElementById("failresult").innerHTML = "The enemy regains composure and strikes you dead.";
                break;   
        }
    }
    if(tier == 10){
        switch(choice){
            case WSWAP:
                document.getElementById("story").innerHTML = "You have traded a dagger for a sword. The "
                        + "bastard party’s light has stopped. For how long, is"
                        + " unknown. The obstacle you faced distracted from the"
                        + " light. Have they made camp? Have they already come"
                        + " to the exit? No matter, you must investigate. You"
                        + " head toward the light, but feel a growing dread with"
                        + " each step. This dungeon now seems impossible to escape"
                        + " and to frightening to endure. You are driven mad by this"
                        + " fear and run back into the darkness, and lose yourself"
                        + " to the terrors of the dungeon.";
                document.getElementById("failresult").innerHTML = "You have traded a dagger for a sword. \nThe "
                        + "bastard party’s light has stopped. For how long, is "
                        + "\nunknown. The obstacle you faced distracted from the "
                        + "light. Have they made camp? Have they already come "
                        + "\nto the exit? No matter, you must investigate. You "
                        + "head toward the light, but feel a growing dread with "
                        + "\neach step. This dungeon now seems impossible to escape "
                        + "and to frightening to endure. You are driven mad by this "
                        + "\nfear and run back into the darkness, and lose yourself "
                        + "to the terrors of the dungeon.";
                break;
            case WLEAVE:
                document.getElementById("story").innerHTML = "The bastard party’s light has stopped. For "
                        + "how long it stopped moving, it is unknown. The "
                        + "\nobstacle you faced distracted from the light. Have "
                        + "they made camp? Have they already come to the exit? "
                        + "\nNo matter, you must investigate. Cautiously, you "
                        + "approach the light. No man is found. What you find "
                        + "\nis a single lit torch on the dungeon wall above a "
                        + "piece of parchment. The parchment reads, “Marius, "
                        + "\nyou fool. You were warned we cannot stop. If the "
                        + "dungeon has not taken you already, meet us at "
                        + "\nDragonhead or die with the rest.” You have now "
                        + "acquired a torch. You are free to light your own "
                        + "\nway and relight the torches on your path, but the "
                        + "bastard party’s trail and your way out of the dungeon "
                        + "\nis lost. You must track them down. There are two paths "
                        + "ahead of you, a passage to the right and to the left." 
                        + " However, you have a deep cut to your arm" 
                        + " you only now notice after the adrenaline wears off";
                document.getElementById("graphic").style.backgroundImage = "url('images/messagetorch.jpg')";
                break;

        }
    }
    if(tier == 11){
        switch(choice){
            case BURN_WOUND:
                document.getElementById("story").innerHTML = "The flame sends agonizing pain through your arm and" 
                    + " the smell of buring flesh fills the air, but the bleeding is stopped. The child in your care was" 
                    + " last seen running through the dark passage. Will you search for her now that you have a torch?";
                break;
            case LEAVE_WOUND:
                document.getElementById("story").innerHTML = "The child in your care was" 
                    + " last seen running through the dark passage. Will you search for her now that you have a torch?";
                
                break;

        }
    }
    if(tier == 12){
        switch(choice){
            case CONTINUE:
                document.getElementById("story").innerHTML = "You have 2 paths to choose. Which will lead you to the Bastard party?";
                break;
            case INVESTIGATE:
                document.getElementById("story").innerHTML = "You quickly traverse the tunnel looking for the girl." 
                    + " you hear her calling for you in the distance. Your search leads to a dead end. Nothing but a" 
                    + " scortched wall and no child to be found." 
                    + " You have 2 paths to choose. Which will lead you to the Bastard party?";
                
                break;
                
        }
        level_complete = true;
    }
    //check if the choice matches the correct choice in winlist
    //change boolean win to false if not a match to initiate losing 
    if(winlist1[tier] != choice && winlist2[tier] != choice){
        win = false;
    }
}

function alternate(tier, choice){
    var winlist1 = [2, 3, 1];
    if(tier == 0){
        switch(choice){
            case ATTACK:
                document.getElementById("story").innerHTML = "Defeat – the enemy’s blade swings true. You could not close the distance.";
                document.getElementById("failresult").innerHTML = "Defeat – the enemy’s blade swings true. You could not close the distance.";
                break;
            case DEFEND:
                document.getElementById("story").innerHTML = "Success! You have deflected the strike with your arm strap. The enemy stands at guard with his sword pointed toward you.";
                break;
            case DODGE:
                document.getElementById("story").innerHTML = "Defeat – the wild swings of the enemy have caught you with a fatal strike.";
                document.getElementById("failresult").innerHTML = "Defeat – the wild swings of the enemy have caught you with a fatal strike.";
                break;   
        }
        console.log("alt");
    }
    else if(tier == 1){
        switch(choice){
            case ATTACK:
                document.getElementById("story").innerHTML = "Defeat! The enemy pierces your heart with his sword.";
                document.getElementById("failresult").innerHTML = "Defeat! The enemy pierces your heart with his sword.";
                break;
            case DEFEND:
                document.getElementById("story").innerHTML = "Defeat! The enemy pierces your heart with his sword.";
                document.getElementById("failresult").innerHTML = "Defeat! The enemy pierces your heart with his sword.";
                break;
            case DODGE:
                document.getElementById("story").innerHTML = "The enemy lunges his sword past you and barelly misses.";
                
                break;   
        }
        console.log("alt");
    }
    else if(tier == 2){
        switch(choice){
            case ATTACK:
                document.getElementById("story").innerHTML = "5Success! The thrust of the dagger makes "
                        + "your opponent scream in pain and then fall dead to "
                        + " the ground. The poor soul has left nothing behind "
                        + "of value but the sword he used to attack you. The "
                        + "weapon he wielded is unlike any human sword. It has "
                        + "strange curves in the blade, a black blade, and strange markings on the handle.";
                document.getElementById("graphic").style.backgroundImage = "url('images/cursesword.jpg')";
                document.getElementById("button1").innerHTML = "Weapon swap";
                document.getElementById("button2").innerHTML = "Leave it";
                document.getElementById("button3").style.display = "none";
                break;
            case DEFEND:
                document.getElementById("story").innerHTML = "Defeat! The enemy swings past your guard and cuts you down.";
                document.getElementById("failresult").innerHTML = "Defeat! The enemy swings past your guard and cuts you down.";
                break;
            case DODGE:
                document.getElementById("story").innerHTML = "The enemy swings wide and cuts you down.";
                document.getElementById("failresult").innerHTML = "The enemy swings wide and cuts you down.";
                break;   
        }
        console.log("alt");
    }
    //check if the choice matches the correct choice in winlist
    //change boolean win to false if not a match to initiate losing 
    if(winlist1[tier] != choice){
        win = false;
    }
}
    /*
    main function to play game. Fills the winlist array with correct choices of your choosing.
    winlist will be used to check for win/loss. calls response function and options functions
    for game play. increments and changes global variable 'count' to continue gamplay. Used in
    button choice click event. Has an if condition to activate losing screen events if player loses 
    Parameter: tier - integer to be passes to reponse function for game response
    Parameter: choice - integer to be passed to options function for choice display
    */
    function main( tier, choice) {
        
        //create and fill array with your winning choices for each tier of level
        var list = [];
        list[0] = 0;
        list[1] = 2;
        list[2] = 2;
        list[3] = 3;
        list[4] = 1;
        list[5] = 1;
        list[6] = 1;
        list[7] = 1;
        list[8] = 2;
        list[9] = 1;
        list[10] = 2;
        //set this list as the the level1 class variable winlist array
        winlist = list;
        
        
        console.log(rnumber);
        if(rnumber <= 5){
            if(plays == 1 && check == false){
                alternate(alttier, choice);
                
                
            }
            else{
            //call response method to display the opening story
            //It will only play the first tier and choice will be a win since they
            //are set to 0
            response(tier, choice);
            
            //increment tier by 1 to initiat tier 1 for next response call
            count++;
            tier = count;
            //loops the options and choice tiers until you lose or finish level
        
            
            //call to print player choices
            options(tier);
            }
        }
        else{
            if(plays == 1 && check == false){
                alternate(alttier, choice);
                
            }
            else{
            response2(tier, choice);
            //increment tier by 1 to initiat tier 1 for next response call
            count++;
            tier = count;
            //call to print player choices
            options2(tier);
            }
        }
            console.log(count);
           console.log(plays);
            console.log(check);
        
        if(level_complete == true){
            count = 0;
            document.getElementById("endlevel").style.display = "block";
            return;
        }
            //if game class variable win is false print losing message and break loop
        
            if(win == false){
                //changes overlay text to display this message
                document.getElementById("failtext").innerHTML = "You have been defeated in this life, but you may find better luck in the next. Beware that you may find differences in the next life. Farewell, hero, and better luck next time, but watch for the signs.";
                //checks if the choice needs a slash effect
                console.log(win);
                checkSlash(tier);
                count = 0;
                rnumber = Math.floor(Math.random() * 10) + 1;
                plays++;
            }
        //these conditions start the alternative response 
        if(plays == 1){
            if(check == false){
                alttier++;
            }
            if(count == 8 && win == true){
                check = false;
            }
            if(alttier == 3 && win == true){
                check = true;
                alttier = 0;
                count = 10;
                tier = count;
            }
            
        }
        
        
    }
//function adds a claw effect that appears on screen when player is hurt then disapears
function slashEffect(){
    document.getElementById("slashscreen").style.backgroundImage = "url('images/sword.png')";
    document.getElementById("slashscreen").style.display = "block";
    //plays the audio
    document.getElementById("myAudio").play();
    setTimeout(hideSlash, 1000);
    setTimeout(displayRedScreen, 1000);
    
    
}
//function hides the slash screen for intances such as retart/replay
function hideSlash(){
    document.getElementById("slashscreen").style.display = "none";
}
//displays the claw effect for clawed monsters, plays slash audio, hids claw
//in one second after start and then displays redscreen
function clawEffect(){
    document.getElementById("slashscreen").style.backgroundImage = "url('images/clawslash.png')";
    document.getElementById("slashscreen").style.display = "block";
    //plays the audio
    document.getElementById("myAudio").play();
    setTimeout(hideSlash, 1000);
    setTimeout(displayRedScreen, 1000);
    
    
}
/*
Checks if a slash effect is needed in a player loss
if the tier level is a certain number a slash or claw is diplayed
otherwise, the redscreen on its own is displayed
Parameter: tier - positive integer to decide claw, slash, or redscreen only
*/
function checkSlash(tier){
    if(tier == 1 || tier == 2 || tier == 3){
       slashEffect(); 
    }
    else if(tier == 6){
       clawEffect();         
    }
    //displays the red screen immediately without any claw/sword
    else{
        displayRedScreen();
    }
}
//displays the losing red screen when the player fails
function displayRedScreen(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loseAudio").play();
}
//Hides the redscreen, used in button click event
function hideRedScreen(){
    document.getElementById("overlay").style.display = "none";
}
function hideEndLevelScreen(){
    document.getElementById("endlevel").style.display = "none";
}
//event handlers initiate first response on window load then button events initiate next responses    
window.addEventListener("load", function() {
    main(count, 0);
});
//Button events listeners pass the play choice to main function 
document.getElementById("button1").addEventListener("click", function() {
    main(count, 1);
});
document.getElementById("button2").addEventListener("click", function() {
    main(count, 2);
});
document.getElementById("button3").addEventListener("click", function() {
    main(count, 3);
});
//event handler to trigger game restart on button click for replay button when you lose
document.getElementById("replayb").addEventListener("click", function() {
    hideRedScreen();
    main(count, 0);
});
document.getElementById("winreplayb").addEventListener("click", function() {
    hideEndLevelScreen();
    level_complete = false;
    main(count, 0);
    
    console.log("test");
});
    

