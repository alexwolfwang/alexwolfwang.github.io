/**
 * Created by Alex.W on 2016/8/8.
 */
(function() {
    angular
        .module('doraemonFact')
        .factory('dataService',DataFactory);

    function DataFactory() {
        var dataObj = {
            doraemonData: doraemonData,
            quizQuestion: quizQuestion,
            correctAnswer: correctAnswer
        };
        return dataObj;
    }

    var correctAnswer = [1,0,3,2,0,1,1,0,3,1];

    var quizQuestion = [
        {
            type: "text",
            text: "what is the name of the first long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita at the Birth of Japan"
                },
                {
                    answer: "Nobita's Dinosaur"
                },
                {
                    answer: "Nobita Drifts in the Universe"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "img",
            text: "Which picture is the cover page of the third3 long story of Doraemon?",
            possibilities:[
                {
                    answer: "imgs/c1.jpg"
                },
                {
                    answer: "imgs/c9.jpg"
                },
                {
                    answer: "imgs/c21.jpg"
                },
                {
                    answer: "imgs/c3.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who is not the friend of Doraemon?",
            possibilities:[
                {
                    answer: "Suneo"
                },
                {
                    answer: "Nobita"
                },
                {
                    answer: "Gigazombie"
                },
                {
                    answer: "Shizuka"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which story Doraemon and friends went to Ancient Arabia?",
            possibilities:[
                {
                    answer: "Nobita in Dorabian Nights"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita's Monstrous Underwater Castle"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "img",
            text: "Which story Nobita became the knight?",
            possibilities:[
                {
                    answer: "imgs/c24.jpg"
                },
                {
                    answer: "imgs/c14.jpg"
                },
                {
                    answer: "imgs/c4.jpg"
                },
                {
                    answer: "imgs/c11.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which is the most ancient Japon time Doraemon and friends back?",
            possibilities:[
                {
                    answer: "8 million years ago"
                },
                {
                    answer: "seventy thousand years ago"
                },
                {
                    answer: "24 biliion years ago"
                },
                {
                    answer: "ninety eight thousand years ago"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How many time Doraemon and firends weny to space in long stories",
            possibilities:[
                {
                    answer: "2 times"
                },
                {
                    answer: "3 times"
                },
                {
                    answer: "4 times"
                },
                {
                    answer: "5 times"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "img",
            text: "Which story Doraemon and friends fall into sea and it's dangerous",
            possibilities:[
                {
                    answer: "imgs/c19.jpg"
                },
                {
                    answer: "imgs/c16.jpg"
                },
                {
                    answer: "imgs/c23.jpg"
                },
                {
                    answer: "imgs/c11.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Guess which story is my favourite?",
            possibilities:[
                {
                    answer: "Nobita in Dorabian Nights"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita's Monstrous Underwater Castle"
                }
            ],
            selected: null,
            correct: null
        }
    ]




    var doraemonData = [
        {
            "Name":"Nobita's Dinosaur",
            "Volume": 1,
            "Public":"1980",
            "Scene": "West coast of North America in Cretaceous",
            "img_url": "imgs/c1.jpg",
            "Plot": "Suneo shows everyone but Nobita a fossil of dinosaur claw. Angry," +
            " Nobita claims he will be able to find a living dinosaur. As Doraemon refuses " +
            "to help him, he digs on a hillside. He finds an egg-shaped stone" +
            " underneath and quickly uses a time wrap to return it to its former form and after " +
            "warming it, the egg hatches to reveal a Futabasaurus, who is subsequently named Piisuke" +
            " by Nobita. Instead of immediately showing it to the others, Nobita waits it grow while" +
            " making a deal with others. As Piisuke grows too large and is in danger of being found" +
            ", Doraemon and Nobita transport him to 100 million years ago in the Late Cretaceous period." +
            " They are attacked by a mysterious assailant who previously tried to make a deal with" +
            " Nobita to sell Piisuke, though they manage to escape. Left with no proof, Nobita instead" +
            " shows them Piisuke through a television monitor, but realizes that he and Doraemon had " +
            "unknowingly transported Piisuke to the North American shore after the time machine was " +
            "attacked by the assailant. They and the others decide to go there, but the time machine " +
            "is overloaded and crashes off."+

            "The group land on the North American shore and find Piisuke, but the time machine is" +
            " broken and must be taken back to Nobita's desk in faraway Japan if they want to go back" +
            " to the present time. As they travel across the land connecting North America and Asia, " +
            "they meet with various dinosaur species who either help or hinder their progress, such as " +
            "Ornithomimosaurus, Apatosaurus, and Tyrannosaurus. At a cliff, they are attacked by a pack " +
            "of Pteranodon who break their bamboocopters. They are saved by several mysterious assailants," +
            " who reveal they are dinosaur hunters working for a fossil collector named Dollmanstein from" +
            " the 24th century. They offer to return them back home in exchange for selling Piisuke. " +
            "Refusing the deal, the group set a lure for the hunters while they escape across a river. " +
            "However, they are eventually spotted and separated with Gian, Suneo, and Shizuka captured by" +
            " the hunters."+

            "Doraemon and Nobita find the hunters' quarter at the downstream where Gian, Suneo, and Shizuka" +
            " are used as baits for a Tyrannosaurus. The hunters demand that they hand over Piisuke in " +
            "exchange for their lives, but the Tyrannosaurus is revealed to be the one they had previously" +
            " used a Momotaro Dango for, thus is tame enough for the group to use in attacking the hunters." +
            " The hunters are subsequently captured and imprisoned by the Future Time Patrols. Piisuke is" +
            " transported to his homeland, the Late Cretaceous Japan while Nobita and his friends go back" +
            " to the present day."
        },
        {
            "Name" : "Nobita and the Haunts of Evil",
            "Volume" : 3,
            "Public" : "1982",
            "Scene": "Smoke Rainforest in Congo",
            "img_url": "imgs/c3.jpg",
            "Plot":"One day,Nobita was stuck in the school again,his teacher not letting him to go(He hadn't " +
            "completed his homework).While his teacher had allowed him to go,Nobita rushed to his house,fearing" +
            " that his mother would scold him.On his way,he found a dog,dirty and hungry after fighting with a " +
            "dog previous night.Nobita wanted to help it,but he couldn't.When his mom sent him to bring some" +
            " things from the market,he had gone there,and while he returned,he spotted the dog again,and Nobita" +
            " gave him a sausage that he had brought from the market.The dog tried to follow him,but Nobita " +
            "chased the dog away.He had requested his mom about keeping pets before too,but every time the answer" +
            " would be 'No'.Nobita's mom had lost her purse,and the dog helped her in finding her purse,making her" +
            " happy.This time,Nobita's mom allowed him to keep the dog.After Nobita and Doraemon cleaned the dog,they" +
            " named him Peko.Nobita wanted some adventure,and requested Doraemon for that.Doraemon launched a rocket,and" +
            " the satellite it had was released.Doraemon used the satellite locator and took pictures mainly from" +
            " Africa.They have left searching for it,knowing that it would be very difficult to handle too many pictures." +
            "Peko was excited to know about it,and after Nobita and his friends have decided to go to that spot,they " +
            "were wondered to see that wonderful sight.But Gian gave up that adventure when everything went wrong with" +
            " him there.Next morning,Gian decided to start the adventure again,but this time without Doraemon's gadgets." +
            "They were facing great troubles,and the later discovered that Peko was actually the prince of a place of" +
            " dogs.He told them the whole story,and Doraemon and hi friends decided to help him.They also discovered" +
            " that there was a great statue.There was a saying that,'When the world will be covered by darkness," +
            "10 travellers will come and save the palace.'Then,when Nobita and his friends saw the destruction of" +
            " the city with their own eyes,Gian blamed himself for all this,Doraemon and his friends helped Gian to" +
            " save the city.While they were unable to fight with the evil king of dogs and his army,Shizuka asked the" +
            " Wish Completing Device to send help for them.Then,other group of Nobita and his friends had arrived,and" +
            " the saying had become true.The new group battled the evil king and his army,and the old group went in the" +
            " statue to move the statue's heart and were able to control it,while Nobita battled with one of the most " +
            "expert swordsman of the kingdom.They had beaten the evil king,and Peko was able to meet with the princess " +
            "whom he wanted.Peko thanks Nobita and his friends for helping him,and he was happy to get back his kingdom again."
        },
        {
            "Name" : "Nobita's Monstrous Underwater Castle",
            "Volume" : 4,
            "Public" : "1983",
            "Scene": "Seabed of Atlantic Ocean",
            "img_url": "imgs/c4.jpg",
            "Plot": "The plot revolves around a summer vacation of Nobita and his friends under the waters of the " +
            "Pacific Ocean. Gian and Suneo take Doraemon's underwater vehicle and travel through the Atlantic Ocean," +
            " trying to find a treasure ship. Along the way, they discover that the environment gun that Doraemon " +
            "used to protect them is running out of energy leaving them vulnerable to the sea. Fortunately, they" +
            " are rescued by some marine creatures. Doraemon and his friends are later captured by these creatures," +
            " revealed to be inhabinats of the underwater kingdom of Mu. It is revealed that another undersea " +
            "kingdom, Atlantis, now controlled by robots, was about to destroy the Earth with nuclear weapons " +
            "after mistaking a volcano eruption for an invasion. With the help of a young boy from Mu, Nobita " +
            "and his friends attempt to stop the robots, but are all captured. However, when things are at their " +
            "grimmest, Doraemon's robotic underwater vehicle sacrifices itself to destroy the computer that" +
            " controlled all the robots and nuclear weapons. After returning to Mu, Doraemon and his friends " +
            "are hailed as heroes before returning home."
        },
        {
            "Name" : "Nobita at the Birth of Japan",
            "Volume" : 9,
            "Public" : "1989",
            "Scene": "Seventy thousand years ago in Japan",
            "img_url": "imgs/c9.jpg",
            "Plot":"The movie starts with a boy who belongs to prehistoric time hunting a fish, gets captured" +
            " in to time vortex and reaches to the 21st century. In the 21st century, Nobita wants to run away" +
            " from his home, as depicted many times in various episodes. As a result of failing to find an ideal" +
            " home, Nobita decides to make a makeshift place to live. However, he still cannot find a place to" +
            " live due to land property ownership laws. At the same time, Shizuka, Gian, Suneo and Doraemon " +
            "want to run away from their homes. Then Nobita suggests that they should go back in time to live " +
            "in a place with very few humans. The group agrees with him and thus, they return to the past Japan," +
            " which is 70000 years back from then. When they reach Japan, Doraemon assigns everyone a ministry." +
            " Shizuka is given the ministry of gardening, Gian gets ministry of development, Suneo receives the " +
            "ministry of landscape and Nobita receives ministry of animals. Doraemon looks after all the " +
            "ministries. Nobita, who is given the ministry, mixes the genes of different animal and creates " +
            "Pegasus, Dragon and Griffin. When Doraemon comes, he hides them from him. At night, the group eats" +
            " the supper and decides to return home and visit here another day. On the next day, the boy from" +
            " the start of movie secretly moves into the Nobita's room and hides behind the door. When Gian and" +
            " Suneo come, Gian fights with him and due to weakness the boy faints. On the arrival of Nobita, " +
            "Shizuka and Doraemon, the group again moves to past. They take the boy into the cave and when he " +
            "regains consciousness, Shizuka gives him food. Doraemon use a translation tool in order to " +
            "understand him. He tells them that he belong to the light tribe and they got attacked by dark " +
            "tribe which took all of his people. So Nobita and Doraemon decide to help him. They trace the dark" +
            " tribe on Pegasus, Dragon and Griffin for four days. On the fourth day, they found them and fight " +
            "with them. However their shaman proved to be strong and give them a strong challenge only to be " +
            "defeated by Doraemon's gadget. Unknown to them the shaman possess the power to restore. They took " +
            "the whole tribe to Japan to give them a peaceful place to live. At night they return home. Next day" +
            " Doraemon tells everybody that shaman can restore itself and light tribe is still in danger, so they" +
            " again move to prehistoric time. They reached late and the dark tribe had already taken the light" +
            " tribe. They again traced the dark tribe with Doraemon's human train gadget, but Nobita gets lost" +
            " and separates from the group in the strong ice-fall. Except for Nobita, the rest of group continues" +
            " to move and they find the light tribe. Doraemon fights with Gigazombie who was the king of spirits." +
            " Doraemon reveals him to be the time criminal, who is creating his own world. He easily defeats " +
            "Doraemon and others. On the other hand, Nobita finds out a box near him and sees a hologram that tell" +
            " him that if needs help he just have to press the button. Nobita's pet animals Pegasus, Dragon and" +
            " Griffin return and they rescue his friend. However Gigazombie shuts them to a lone place. Nobita uses" +
            " button and the helper revealed to be Time Patrol who captures the Gigazombie. At the end Pegasus," +
            " Dragon and Griffin were returned to Time Patrol as they could not survive in modern era. The groups" +
            " leaves for home."
        },
        {
            "Name" : "Nobita in Dorabian Nights",
            "Volume" : 11,
            "Public" : "1991",
            "Scene": "Ancient Arabia",
            "img_url": "imgs/c11.jpg",
            "Plot":"Nobita Nobi and Doraemon experience the tale of Sinbad the Sailor of the Arabian Nights fame" +
            " firsthand using a storybook gadget, but Nobita becomes bored by just watching it from afar. He tries" +
            " to invite Shizuka Minamoto to enter the storybooks of other tales and accidentally brings Takeshi " +
            "'Gian' Goda and Suneo Honekawa along. Gian and Suneo mess up the storybooks to create a 'fresh' tale," +
            " which causes Nobita and Shizuka to experience a mishmash of various tales that Shizuka dislikes. " +
            "Attempting to leave, she is knocked out by Sinbad's magic carpet and falls into the desert."+

            "The next day, Doraemon realizes that Shizuka has gone missing and stages a rescue mission by going" +
            " to 8th century Baghdad, during the reign of caliph Harun al-Rashid, after receiving a confirmation" +
            " from the future that the world of the Arabian Nights does indeed coincide with the 8th century Abbasid" +
            " Caliphate. Posing as foreign traders and servants, Nobita, Doraemon, Gian, and Suneo are rescued from" +
            " Cassim and his bandits by the caliph himself, who gives a permit that allows them to travel from the" +
            " port of Basra. Initially, the four are accompanied by Mikujin, a guide genie, but the latter goes " +
            "upset when they insult him due to his incompetency and leaves. After purchasing a ship, however, the" +
            " group are double-crossed by the trader, who reveals himself to be Cassim, and are thrown overboard." +

            "Waking up on the shore of the Arabian Desert, the four are forced to walk through it because Doraemon's" +
            " pocket is lost during the storm that also crashed Cassim's ship. However, they are rescued by a " +
            "gigantic genie commandeered by Sinbad, who reigns over a marvelous city in the desert presented by " +
            "an anonymous time traveler from the future. With his magical gadgets, Sinbad helps the four rescue " +
            "Shizuka from a bandit named Abdil. Vowing revenge, Abdil meets with Cassim and his two minions to " +
            "search for the lost city. It is then revealed that Abdil was the only visitor to Sinbad's city who " +
            "remembers its location, because when Sinbad urged him to drink a memory potion after the visit, he" +
            " spewed it away."+

            "After arriving, Abdil and Cassim swiftly take the city from Sinbad, whom they expel. Mikujin returns" +
            " and helps the group with Doraemon's pocket, which he recovered after the storm. The group eventually" +
            " manage to defeat Abdil and Cassim and retake the city. Despite Sinbad's offer for them to remain by " +
            "not erasing their memories with the memory potion, Nobita and his friends bid him farewell before " +
            "returning to the present day."
        },
        {
            "Name" : "Nobita and Fantastic Three Musketeers",
            "Volume" : 14,
            "Public" : "1994",
            "Scene": "Dream world",
            "img_url": "imgs/c14.jpg",
            "Plot": "Tired of constantly having nightmares, Nobita ask for Doraemon to bring a Dream Machine which " +
            "would allow Nobita to dream of anything he wants. After an attempt to have a dream about the fall of" +
            " Atlantis fails, he chooses a dream where he is in a fantasy world with an inspiration from The Three" +
            " Musketeers.Doraemon disagrees and gives him a lecture which makes Nobita angry and he runs away from" +
            " home.Doraemon searches him and promises him to let him watch the dream of The Three Musketeers." +
            " Doraemon sends him to the dream. At the start of the dream he meets a fairy who brings him to a" +
            " city in the Kingdom of Yumirume under the attack of Emperor Odrome's army. Enemies start firing" +
            " at Nobita, only to be saved by the fairy. She cuts off the piece of moon, causing Nobita to blow" +
            " away. When he gets up he finds himself at the forest and one of the Sherogani swordsman namely " +
            "Suneo makes him his slave.On the way, Nobita helps the baby bear to get out of trap. While moving " +
            "through the jungle Nobita is attacked by another swordsman Gian. In order to save him Suneo fights" +
            " with Gian, which he loses and he and Nobita have to retreat. Both of the swordsman move to the inner" +
            " forest in order to find the Sherogani sword and suit. Both swordsman climb over the sky-touching tree" +
            " to get the sword but Nobita luckily finds the blasted moon and with its help, he reaches to the top of" +
            " tree and gets the sword. In this way he becomes another swordsman. At the same time Nobita's mother" +
            " comes and wakes him. In the school, he found that due to the dream Gian and Suneo are tired."+

            "At night Nobita asks Doraemon to add his friends to his dream. So he puts an antenna to the heads" +
            " of his sleeping friends. When the dream starts, Nobita get shocked to see Doraemon in his dream too." +
            "Now Gian and Suneo also become a part of his dream. All the friends moves in forest in order to save" +
            " the attacked city. Abruptly, they got attacked by a bear, only to be saved by the baby bear who tells" +
            " the bear that Nobita saved him from the trap. The bear promised the group to take them to cave of dragon."+

            "On the other hand, princess Shizuka disagrees with her father's idea to marry the person who will defeat" +
            " the evil king. She runs away from the castle, rides over the break which takes her away."+

             "In the forest, the bear leads the group to the cave to dragon, but due to the stream of water Nobita and" +
            " Doraemon get separated from the other two. Gian and Suneo continue to move. Suddenly the dragon appears" +
            " and turn them into stones with his fire-breath."+

            "Nobita and Doraemon meet with Shizuka. All of them got covered in sand due to falling of sand.Doraemon " +
            "suggests that in this form dragon can not identify them. So they move to inner cave of the dragon. Nobita" +
            " screamed to see Gian and Suneo in stoned form. Dragon hears it and attack Nobita with his fire, but he" +
            " protect himself with his sword. He cuts the dragon's mustaches with the sword, causing the dragon to" +
            " faint. When he was at the verge of finishing the dragon, he stops and gets away. All of them agree " +
            "with Nobita. Dragon regains conscious, he tells Nobita that he does not want to turn any one to stone," +
            " he just wants to protect himself. He lets them bath in his perspiration which will grant him one more" +
            " time to live. He also turns Gian and Suneo into normal humans."+

            "Then they move toward the attacked city. The city was empty. They found the army men at the castle." +
            " All of them plan to destroy the enemy's army by water as they were made of sand. So all of the army" +
            " men got dissolved in water. The evil king gets furious at that.He decides to fight with Nobita himself." +
            " So he finishes Nobita one time. The other time he tries to finish him, Nobita and Doraemon get awakened" +
            " by mother, causing the dream to stop."+

            "Doraemon and Nobita decide to finish the dream. He removes the antenna from all of his friends except" +
            " for Shizuka who was bathing. At night when Nobita and Doraemon were going to sleep, the fairy from the" +
            " start of dream came and take them to the dream again. This time still fighting with king. King finishes" +
            " the Shizuka one time as he does not know that she can regain life one more time. Nobita and king " +
            "continue to fight each other. Nobita keeps the edge of sword toward the king. At the same time Shizuka" +
            " uses big light on the sword which moves across the body of evil king, causing him to die. The movie ends" +
            " with princess Shizuka agreeing to marry with nobita"
        },
        {
            "Name" : "Nobita and Galactic Express",
            "Volume" : 16,
            "Public" : "1996",
            "Scene": "fringe planet",
            "img_url": "imgs/c16.jpg",
            "Plot": "Train, wonderland"
        },
        {
            "Name" : "Nobita Drifts in the Universe",
            "Volume" : 19,
            "Public" : "1999",
            "Scene": "20 light years away from Earth",
            "img_url": "imgs/c19.jpg",
            "Plot": "The film is the second in the series to parody the original Star Wars trilogy. In the film," +
            " Doraemon and friends find themselves in an interstellar war where an army (based on the Galactic" +
            " Empire) is trying to take over Earth. Of course, our heroes joins another army (based on the Rebel" +
            " Alliance) to stop the antagonists."
        },
        {
            "Name" : "Nobita and the Wind Wizard",
            "Volume" : 23,
            "Public" : "2003",
            "Scene": "Wind village",
            "img_url": "imgs/c23.jpg",
            "Plot": "wind, monster, right,wrong"
        }
    ]
})();