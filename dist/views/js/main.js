var pizzaIngredients={};function getAdj(e){switch(e){case"dark":return["dark","morbid","scary","spooky","gothic","deviant","creepy","sadistic","black","dangerous","dejected","haunted","morose","tragic","shattered","broken","sad","melancholy","somber","dark","gloomy","homicidal","murderous","shady","misty","dusky","ghostly","shadowy","demented","cursed","insane","possessed","grotesque","obsessed"];case"color":return["blue","green","purple","grey","scarlet","NeonGreen","NeonBlue","NeonPink","HotPink","pink","black","red","maroon","silver","golden","yellow","orange","mustard","plum","violet","cerulean","brown","lavender","violet","magenta","chestnut","rosy","copper","crimson","teal","indigo","navy","azure","periwinkle","brassy","verdigris","veridian","tan","raspberry","beige","sandy","ElectricBlue","white","champagne","coral","cyan"];case"whimsical":return["whimsical","silly","drunken","goofy","funny","weird","strange","odd","playful","clever","boastful","breakdancing","hilarious","conceited","happy","comical","curious","peculiar","quaint","quirky","fancy","wayward","fickle","yawning","sleepy","cockeyed","dizzy","dancing","absurd","laughing","hairy","smiling","perplexed","baffled","cockamamie","vulgar","hoodwinked","brainwashed"];case"shiny":return["sapphire","opal","silver","gold","platinum","ruby","emerald","topaz","diamond","amethyst","turquoise","starlit","moonlit","bronze","metal","jade","amber","garnet","obsidian","onyx","pearl","copper","sunlit","brass","brassy","metallic"];case"noisy":return["untuned","loud","soft","shrieking","melodious","musical","operatic","symphonic","dancing","lyrical","harmonic","orchestral","noisy","dissonant","rhythmic","hissing","singing","crooning","shouting","screaming","wailing","crying","howling","yelling","hollering","caterwauling","bawling","bellowing","roaring","squealing","beeping","knocking","tapping","rapping","humming","scatting","whispered","whispering","rasping","buzzing","whirring","whistling","whistled"];case"apocalyptic":return["nuclear","apocalyptic","desolate","atomic","zombie","collapsed","grim","fallen","collapsed","cannibalistic","radioactive","toxic","poisonous","venomous","disastrous","grimy","dirty","undead","bloodshot","rusty","glowing","decaying","rotten","deadly","plagued","decimated","rotting","putrid","decayed","deserted","acidic"];case"insulting":return["stupid","idiotic","fat","ugly","hideous","grotesque","dull","dumb","lazy","sluggish","brainless","slow","gullible","obtuse","dense","dim","dazed","ridiculous","witless","daft","crazy","vapid","inane","mundane","hollow","vacuous","boring","insipid","tedious","monotonous","weird","bizarre","backward","moronic","ignorant","scatterbrained","forgetful","careless","lethargic","insolent","indolent","loitering","gross","disgusting","bland","horrid","unseemly","revolting","homely","deformed","disfigured","offensive","cowardly","weak","villainous","fearful","monstrous","unattractive","unpleasant","nasty","beastly","snide","horrible","syncophantic","unhelpful","bootlicking"];case"praise":return["beautiful","intelligent","smart","genius","ingenious","gorgeous","pretty","witty","angelic","handsome","graceful","talented","exquisite","enchanting","fascinating","interesting","divine","alluring","ravishing","wonderful","magnificient","marvelous","dazzling","cute","charming","attractive","nifty","delightful","superior","amiable","gentle","heroic","courageous","valiant","brave","noble","daring","fearless","gallant","adventurous","cool","enthusiastic","fierce","awesome","radical","tubular","fearsome","majestic","grand","stunning"];case"scientific":return["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"];default:return["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"]}}function getNoun(e){switch(e){case"animals":return["flamingo","hedgehog","owl","elephant","pussycat","alligator","dachsund","poodle","beagle","crocodile","kangaroo","wallaby","woodpecker","eagle","falcon","canary","parrot","parakeet","hamster","gerbil","squirrel","rat","dove","toucan","raccoon","vulture","peacock","goldfish","rook","koala","skunk","goat","rooster","fox","porcupine","llama","grasshopper","gorilla","monkey","seahorse","wombat","wolf","giraffe","badger","lion","mouse","beetle","cricket","nightingale","hawk","trout","squid","octopus","sloth","snail","locust","baboon","lemur","meerkat","oyster","frog","toad","jellyfish","butterfly","caterpillar","tiger","hyena","zebra","snail","pig","weasel","donkey","penguin","crane","buzzard","vulture","rhino","hippopotamus","dolphin","sparrow","beaver","moose","minnow","otter","bat","mongoose","swan","firefly","platypus"];case"profession":return["doctor","lawyer","ninja","writer","samurai","surgeon","clerk","artist","actor","engineer","mechanic","comedian","fireman","nurse","RockStar","musician","carpenter","plumber","cashier","electrician","waiter","president","governor","senator","scientist","programmer","singer","dancer","director","mayor","merchant","detective","investigator","navigator","pilot","priest","cowboy","stagehand","soldier","ambassador","pirate","miner","police"];case"fantasy":return["centaur","wizard","gnome","orc","troll","sword","fairy","pegasus","halfling","elf","changeling","ghost","knight","squire","magician","witch","warlock","unicorn","dragon","wyvern","princess","prince","king","queen","jester","tower","castle","kraken","seamonster","mermaid","psychic","seer","oracle"];case"music":return["violin","flute","bagpipe","guitar","symphony","orchestra","piano","trombone","tuba","opera","drums","harpsichord","harp","harmonica","accordion","tenor","soprano","baritone","cello","viola","piccolo","ukelele","woodwind","saxophone","bugle","trumpet","sousaphone","cornet","stradivarius","marimbas","bells","timpani","bongos","clarinet","recorder","oboe","conductor","singer"];case"horror":return["murderer","chainsaw","knife","sword","murder","devil","killer","psycho","ghost","monster","godzilla","werewolf","vampire","demon","graveyard","zombie","mummy","curse","death","grave","tomb","beast","nightmare","frankenstein","specter","poltergeist","wraith","corpse","scream","massacre","cannibal","skull","bones","undertaker","zombie","creature","mask","psychopath","fiend","satanist","moon","fullMoon"];case"gross":return["slime","bug","roach","fluid","pus","booger","spit","boil","blister","orifice","secretion","mucus","phlegm","centipede","beetle","fart","snot","crevice","flatulence","juice","mold","mildew","germs","discharge","toilet","udder","odor","substance","fluid","moisture","garbage","trash","bug"];case"everyday":return["mirror","knife","fork","spork","spoon","tupperware","minivan","suburb","lamp","desk","stereo","television","TV","book","car","truck","soda","door","video","game","computer","calender","tree","plant","flower","chimney","attic","kitchen","garden","school","wallet","bottle"];case"jewelry":return["earrings","ring","necklace","pendant","choker","brooch","bracelet","cameo","charm","bauble","trinket","jewelry","anklet","bangle","locket","finery","crown","tiara","blingBling","chain","rosary","jewel","gemstone","beads","armband","pin","costume","ornament","treasure"];case"places":return["swamp","graveyard","cemetery","park","building","house","river","ocean","sea","field","forest","woods","neighborhood","city","town","suburb","country","meadow","cliffs","lake","stream","creek","school","college","university","library","bakery","shop","store","theater","garden","canyon","highway","restaurant","cafe","diner","street","road","freeway","alley"];case"scifi":return["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"];default:return["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"]}}pizzaIngredients.meats=["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"],pizzaIngredients.nonMeats=["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"],pizzaIngredients.cheeses=["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"],pizzaIngredients.sauces=["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"],pizzaIngredients.crusts=["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"];var adjectives=["dark","color","whimsical","shiny","noisy","apocalyptic","insulting","praise","scientific"],nouns=["animals","everyday","fantasy","gross","horror","jewelry","places","scifi"];function generator(e,a){var r=getAdj(e),n=getNoun(a),i=parseInt(Math.random()*r.length),t=parseInt(Math.random()*n.length);return"The "+r[i]+" "+n[t]}function randomName(){var e=parseInt(Math.random()*adjectives.length),a=parseInt(Math.random()*nouns.length);return generator(adjectives[e],nouns[a])}var selectRandomMeat=function(){return pizzaIngredients.meats[Math.floor(Math.random()*pizzaIngredients.meats.length)]},selectRandomNonMeat=function(){return pizzaIngredients.nonMeats[Math.floor(Math.random()*pizzaIngredients.nonMeats.length)]},selectRandomCheese=function(){return pizzaIngredients.cheeses[Math.floor(Math.random()*pizzaIngredients.cheeses.length)]},selectRandomSauce=function(){return pizzaIngredients.sauces[Math.floor(Math.random()*pizzaIngredients.sauces.length)]},selectRandomCrust=function(){return pizzaIngredients.crusts[Math.floor(Math.random()*pizzaIngredients.crusts.length)]},ingredientItemizer=function(e){return"<li>"+e+"</li>"},makeRandomPizza=function(){for(var e="",a=Math.floor(4*Math.random()),r=Math.floor(3*Math.random()),n=Math.floor(2*Math.random()),i=0;i<a;i++)e+=ingredientItemizer(selectRandomMeat());for(var t=0;t<r;t++)e+=ingredientItemizer(selectRandomNonMeat());for(var o=0;o<n;o++)e+=ingredientItemizer(selectRandomCheese());return e+=ingredientItemizer(selectRandomSauce()),e+=ingredientItemizer(selectRandomCrust())},pizzaElementGenerator=function(e){var a,r,n,i,t,o;return a=document.createElement("div"),r=document.createElement("div"),n=document.createElement("img"),i=document.createElement("div"),a.classList.add("randomPizzaContainer"),a.style.width="33.33%",a.style.height="325px",a.id="pizza"+e,r.style.width="35%",n.src="img/pizza.png",n.classList.add("img-responsive"),r.appendChild(n),a.appendChild(r),i.style.width="65%",(t=document.createElement("h4")).classList.add("pizzaName"),t.innerHTML=randomName(),i.appendChild(t),(o=document.createElement("ul")).innerHTML=makeRandomPizza(),i.appendChild(o),a.appendChild(i),a};function changeSliderLabel(e){switch(e){case"1":return void(document.getElementById("pizzaSize").innerHTML="Small");case"2":return void(document.getElementById("pizzaSize").innerHTML="Medium");case"3":return void(document.getElementById("pizzaSize").innerHTML="Large");default:console.log("bug in changeSliderLabel")}}function changePizzaSizes(e){var a;switch(e){case"1":a=25;break;case"2":a=33;break;case"3":a=50;break;default:console.log("bug in sizeSwitcher")}for(var r=document.getElementsByClassName("randomPizzaContainer"),n=0;n<r.length;++n)r[n].style.width=a.toString()+"%"}var resizePizzas=function(e){window.performance.mark("mark_start_resize"),changeSliderLabel(e),changePizzaSizes(e),window.performance.mark("mark_end_resize"),window.performance.measure("measure_pizza_resize","mark_start_resize","mark_end_resize");var a=window.performance.getEntriesByName("measure_pizza_resize");console.log("Time to resize pizzas: "+a[a.length-1].duration+"ms")};window.performance.mark("mark_start_generating");for(var i=2;i<100;i++){var pizzasDiv=document.getElementById("randomPizzas");pizzasDiv.appendChild(pizzaElementGenerator(i))}window.performance.mark("mark_end_generating"),window.performance.measure("measure_pizza_generation","mark_start_generating","mark_end_generating");var timeToGenerate=window.performance.getEntriesByName("measure_pizza_generation");console.log("Time to generate pizzas on load: "+timeToGenerate[0].duration+"ms");var frame=0;function logAverageFrame(e){for(var a=e.length,r=0,n=a-1;n>a-11;n--)r+=e[n].duration;console.log("Average scripting time to generate last 10 frames: "+r/10+"ms")}function debounce(e,a,r){var n;return function(){var i=this,t=arguments,o=r&&!n;clearTimeout(n),n=setTimeout(function(){n=null,r||e.apply(i,t)},a),o&&e.apply(i,t)}}var debounceUpdate=debounce(function(){for(var e,a=document.getElementsByClassName("mover"),r=document.body.scrollTop/1250,n=0;n<a.length;n++)e=Math.sin(r+n%5),a[n].style.left=a[n].basicLeft+100*e+"px"},250),updatePositions=function(){(frame++,window.performance.mark("mark_start_frame"),debounceUpdate(),window.performance.mark("mark_end_frame"),window.performance.measure("measure_frame_duration","mark_start_frame","mark_end_frame"),frame%10==0)&&logAverageFrame(window.performance.getEntriesByName("measure_frame_duration"))};window.addEventListener("scroll",updatePositions),document.addEventListener("DOMContentLoaded",function(){for(var e=screen.availWidth/256,a=screen.availHeight/256,r=Math.ceil(e*a),n=document.getElementById("movingPizzas1"),i=0;i<r;i++){var t=document.createElement("img");t.className="mover",t.src="img/pizza.png",t.style.height="100px",t.style.width="73.333px",t.basicLeft=i%e*256,t.style.top=256*Math.floor(i/e)+"px",n.appendChild(t)}updatePositions()});