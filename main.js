//const {app, BrowserWindow } = require('electron');
//app.on('ready', () => {
//  const win = new BrowserWindow();
//});



let Levelup = 0;
if(localStorage.getItem('Level'))
{
  Levelup=JSON.parse(localStorage.getItem('Level'));
}
const levelElement=document.getElementById('level');
levelElement.textContent=Levelup;

const q = document.getElementById('Q');
q.style.marginTop = '20px';
q.style.width = '100%';
q.style.height = '10px';
count_quest = 0;

const Processor = document.getElementById("Processor");
Processor.style.marginTop = '20px';
Processor.style.width = '100%';
Processor.style.height = '10px';

const program = document.getElementById('IDE');
program.style.marginTop = '20px';
program.style.width = '100%';
program.style.height = '10px';
let count_IDE = 0;

const score = document.getElementById('text_score_clicks');
const count_click = document.getElementById('text');
const monitor = document.getElementById('monitor');

const body = document.querySelector('body');
let counter = localStorage.getItem('Count');
let c = 1;
let l = document.getElementById('Languages');
l.style.marginTop = '20px';
l.style.width = '100%';
l.style.height = '10px';
let all_click = 0;
document.addEventListener('keydown', function(event) {
  if (event.key === '+') {
    c -= 0.1;
  body.style.filter = `brightness(${c})`;
  }else if (event.key === '-') {
    c += 0.1;
  body.style.filter = `brightness(${c})`;
  }
});

count_click.style.backgroundColor = 'blue';
count_click.style.height = "50px";
count_click.style.width = '80px';
count_click.style.fontSize = '40px';
count_click.style.borderRadius = "10px";
count_click.style.position = 'absolute';
count_click.style.boxShadow = '1px 1px 5px 3px rgba( 255, 0, 0, 0.8 )';
count_click.textContent = "";
let price = ["500", "1K", "5K", "31K", "90K", "380K", "970K", "5M", "12M", "59M"];
let price_num = [500, 1000, 5000, 31000, 90000, 380000, 970000, 5000000, 12000000, 59000000];

const money = document.getElementById('money');

money.style.backgroundColor = 'blue';
money.style.height = "50px";
money.style.width = '80px';
money.style.fontSize = '40px';
money.style.borderRadius = "10px";
money.style.position = 'absolute';
money.style.boxShadow = '1px 1px 5px 3px rgba( 255, 0, 0, 0.8 )';
money.style.marginLeft = "82%";
money.style.marginTop = "0";
money.textContent = "";

let tmp = Number(localStorage.getItem('Count'));
let tmp_click = Number(localStorage.getItem('All_Clicks_Count'));
let money_num = 0 || tmp_click;
var mouse_click = new Audio('./click_mouse.mp3');
let count = 0 || tmp;
let progressDiv = document.getElementById('prog');
let isMouseDown = false;
let intervalId = null;
let progressValue = 100;
progressDiv.style.position = "abdolute";
progressDiv.style.margin = "0px";
score.style.marginTop = '20px';
score.style.width = '100%';
score.style.height = '10px';
let count_languages = 0;
let count_proc = 0;
// Обработчик нажатия кнопки мыши
comp.addEventListener('mousedown', function() {
  isMouseDown = true;
  progressValue -= 1;
  updateProgress();
  mouse_click.play();
});

// Обработчик отпускания кнопки мыши
comp.addEventListener('mouseup', function() {
  isMouseDown = false;
  
  if(progressValue > 0)
  {
    mouse_click.play();
    if(localStorage.getItem('Button_Edu0'))
    {
      count+=2;
      
    }
    else if(localStorage.getItem('Button_Edu1')){
      count+=4;
      
    }else if(localStorage.getItem('Button_Edu2')){
      count+=4;
    }else if(localStorage.getItem('Button_Edu3')){
      count+=8;
    }else if(localStorage.getItem('Button_Edu4')){
      count+=16;
    }else if(localStorage.getItem('Button_Edu5')){
      count+=32;
    }else if(localStorage.getItem('Button_Edu6')){
      count+=64;
    }else if(localStorage.getItem('Button_Edu7')){
      count+=128;
    }else if(localStorage.getItem('Button_Edu8')){
      count+=526;
    }else if(localStorage.getItem('Button_Edu9')){
      count+=1024;
    }else{
      count+=1;
    }


    if(localStorage.getItem('Button_Disk0'))
    {
      count+=2;
      
    }
    else if(localStorage.getItem('Button_Disk1')){
      count+=4;
      
    }else if(localStorage.getItem('Button_Disk2')){
      count+=4;
    }else if(localStorage.getItem('Button_Disk3')){
      count+=8;
    }else if(localStorage.getItem('Button_Disk4')){
      count+=16;
    }else if(localStorage.getItem('Button_Disk5')){
      count+=32;
    }else if(localStorage.getItem('Button_Disk6')){
      count+=64;
    }else if(localStorage.getItem('Button_Disk7')){
      count+=128;
    }else if(localStorage.getItem('Button_Disk8')){
      count+=526;
    }else if(localStorage.getItem('Button_Disk9')){
      count+=1024;
    }

        if(localStorage.getItem('Button_Proc0'))
    {
      count+=2;
      
    }
    else if(localStorage.getItem('Button_Proc1')){
      count+=4;
      
    }else if(localStorage.getItem('Button_Proc2')){
      count+=4;
    }else if(localStorage.getItem('Button_Proc3')){
      count+=8;
    }else if(localStorage.getItem('Button_Proc4')){
      count+=16;
    }else if(localStorage.getItem('Button_Proc5')){
      count+=32;
    }else if(localStorage.getItem('Button_Proc6')){
      count+=64;
    }else if(localStorage.getItem('Button_Proc7')){
      count+=128;
    }else if(localStorage.getItem('Button_Proc8')){
      count+=526;
    }else if(localStorage.getItem('Button_Proc9')){
      count+=1024;
    }


    localStorage.setItem('Count', count);
    all_click++;
    localStorage.setItem("All_Clicks_Count", all_click);
  }
  
});

// Обработчик движения мыши
comp.addEventListener('mousemove', function() {
  if (isMouseDown) {
    progressValue -= 1;
    updateProgress();
    mouse_click.play();
  }
});

// Функция обновления значения прогресса
function updateProgress() {
  // Ограничиваем значение прогресса от 0 до 100
  progressValue = Math.max(0, Math.min(100, progressValue));
  progressDiv.style.width = progressValue + '%';
  count_click.textContent = count;
  score.textContent = `Clicks : ${all_click}`;
  if(all_click === 100)
  {
    Levelup++;
    levelElement.textContent=Levelup;
    localStorage.setItem('Level', Levelup);

  }
}

// Установка интервала для увеличения значения прогресса
intervalId = setInterval(function() {
  progressValue += 1;
  updateProgress();
}, 500);






count1 = 0;
tmp = false;
education.onclick = () =>{
  mouse_click.play();
  count1++;
  const click_edu = document.getElementById('click_edu');
  let edu = ["Pascal", "Swift", "Python", "Ruby", "Kotlin", "PHP", "JavaScript", "C++", "C#", "Assambly"];
  let image = ["laguages/Pascal.png", "laguages/Swift.png", "laguages/Python.png", "laguages/Ruby.png", "laguages/Kotlin.png", 
  "laguages/PHP.png", "laguages/JavaScript.png", "laguages/C++.png", "laguages/C_Sharp.png", "laguages/Assembly.png"];
 
  
  if(count1 % 2 != 0)
  {
    
    click_edu.style.backgroundColor = 'rgb(142, 150, 163)';
    click_edu.style.height = "30ex";
    click_edu.style.width = '40ex';
    click_edu.style.fontSize = '40px';
    click_edu.style.position = 'absolute';
    click_edu.style.marginLeft = "25ex";
    click_edu.style.marginTop = "7ex";
    click_edu.style.display='';

    
    if(count1 === 1)
    {
      for (let i = 0; i < 10; i++) {
        // Create and configure each child div element
        const childDiv = document.createElement('div');
        childDiv.classList.add(`child-div-${i}`);
        childDiv.style.marginTop = '10px';
        childDiv.style.width = '100%';
        childDiv.style.height = '100px';
        childDiv.style.backgroundColor = 'rgb(213, 215, 219)';
        childDiv.style.marginBottom = "10px";

        // Create a text node
        let text = document.createTextNode(`${edu[i]}`);


        let img = document.createElement('img');
        img.src = image[i];
        img.style.height = "100px";
        img.style.width = "100px";
        // Create a button element
        let button = document.createElement("button");
        button.innerText = `${price[i]}`;
        button.style.height = '100px';
        button.style.width = '100px';
        button.style.right = '0';
    
        button.style.position = 'absolute';
      
        
        childDiv.appendChild(img);
        childDiv.appendChild(text);
        childDiv.appendChild(button);
      
        // Append each child div to the parent div
        click_edu.appendChild(childDiv);
        mouse_click.play();
        let b = localStorage.getItem(`Button_Edu${i}`);
        if(button.outerText === b)
        {
            button.textContent = "Bought";
            button.disabled = true;
        }
  
        button.onclick = () =>{
          mouse_click.play();
         
          if(money_num >= price_num[i])
          {
            localStorage.setItem(`Button_Edu${i}`, button.outerText);
            const b = true;
            tmp2=b;
            button.style.color='gray';
            button.textContent='Bought';
            money_num -= price_num[i];
            money.textContent = money_num;
            button.disabled = true;
            count_languages++;
            l.textContent = `\nLanguages : ${count_languages}`;
            if(count_languages === 5)
            {
              Levelup++;
              levelElement.textContent=Levelup;
              localStorage.setItem('Level', Levelup);
            }
          }
          
        }
  
      }
  
    }
    
    
 
    
  }
  if(count1 % 2 === 0)
  {
    click_edu.style.display='none';
  }


}
count2 = 0;

tmp2 = false;


disk.onclick = () =>{
  mouse_click.play();
  count2++;
  const click_disk = document.getElementById('click_disk');
  let pic_IDE = ['IDE/TextDoc.png', 'IDE/PascalABC.net.png', 'IDE/Delphi.png', 'IDE/Notepad++.png', 'IDE/SublimeText.png', 'IDE/PHPStorm.png', 'IDE/IntellijIdea.png', 'IDE/PyCharm.png', 'IDE/Visual Studio.png', 'IDE/Elipse.png', 'IDE/QT.png'];
  let IDE = ["TXT", "PASCALABC.NET", "DELPHI", "Notepad++", "Sublime TXT", "PHPSTORM", "INTELLIJ IDEA", " PYCHARM", "VISUAL STUDIO", "ELIPSE", "QT"];
  if(count2 % 2 != 0)
  {
    click_disk.style.backgroundColor = 'rgb(142, 150, 163)';
    click_disk.style.height = "30ex";
    click_disk.style.width = '40ex';
    click_disk.style.fontSize = '40px';
    click_disk.style.position = 'absolute';
    click_disk.style.marginLeft = "25ex";
    click_disk.style.marginTop = "7ex";
    click_disk.style.display='';

    if(count2 === 1)
    {
      for (let i = 0; i < 10; i++) {
        // Create and configure each child div element
        const childDiv = document.createElement('div');
        childDiv.classList.add(`child-div-${i}`);
        childDiv.style.marginTop = '10px';
        childDiv.style.width = '100%';
        childDiv.style.height = '100px';
        childDiv.style.backgroundColor = 'rgb(213, 215, 219)';
        childDiv.style.marginBottom = "10px";
        const img = document.createElement("img");
        img.src = pic_IDE[i];
        img.style.height = "100px";
        img.style.width = "100px";
      
        // Create a text node
        let text = document.createTextNode(`${IDE[i]}`);
      
        // Create a button element
        let button = document.createElement("button");
        button.innerText = `${price[i]}`;
        button.style.height = '100px';
        button.style.width = '100px';
        button.style.right = '0';
    
        button.style.position = 'absolute';
      
        // Append the image, text, and button elements to the child div
        childDiv.appendChild(img);
        childDiv.appendChild(text);
        childDiv.appendChild(button);
      
        // Append each child div to the parent div
        click_disk.appendChild(childDiv);
        let b = localStorage.getItem(`Button_Disk${i}`);
        if(button.outerText === b)
        {
            button.textContent = "Bought";
            button.disabled = true;
        }
        button.onclick = () =>{
          mouse_click.play();
          if(money_num >= price_num[i])
          {
            localStorage.setItem(`Button_Disk${i}`, button.outerText);
            const b = true;
            tmp2=b;
            button.style.color='gray';
            button.textContent='Bought';
            money_num -= price_num[i];
            money.textContent = money_num;
            button.disabled = true; 
            count_IDE++;
            program.textContent = `IDE : ${count_IDE}`;
            if(count_IDE === 5)
            {
              Levelup++;
              levelElement.textContent=Levelup;
              localStorage.setItem('Level', Levelup);
            }else if(count_IDE === 9)
            {
              Levelup++;
              levelElement.textContent=Levelup;
              localStorage.setItem('Level', Levelup);
            }
          }
        }
  
      }
  
    }
    
    
 
    
  }
  if(count2 % 2 === 0)
  {
    click_disk.style.display='none';
  }


  

}

tmp3 = false;
count3 = 0;
procesor.onclick  = () =>{
  mouse_click.play();
  count3++;
  const click_procesor = document.getElementById('click_procesor');
  let pic_proc = ['./Processors/intelxeon2.42002-26.png', './Processors/intelxeon2.42002-27.png', './Processors/athlon64x264002007.png', './Processors/intelpentiumd9352006.png', './Processors/athlon64x264002007.png', './Processors/amdfx83502012.png', './Processors/intelcorei545902014.png', '/Processors/amdfx95902016.png', './Processors/intelcorei97980xe2018.png', './Processors/intelceleron850 2000.png'];let proc = ["Intel Celeron 850 200", "Intel Xeon 2.4 2002", "AMD Athlon 64 2003", "Intel Pentium D 935 2006", "Athlon 64 X2 6400 2007", "Intel Core I7-970 2010", "AMD FX-8350 2012", "Intel Core I5-4590 2014", "AMD FX 9590 2016","Intel Core I9-7980XE 2018"];
  if(count3 % 2 != 0)
  {
    click_procesor.style.backgroundColor = 'rgb(142, 150, 163)';
    click_procesor.style.height = "30ex";
    click_procesor.style.width = '40ex';
    click_procesor.style.fontSize = '40px';
    click_procesor.style.position = 'absolute';
    click_procesor.style.marginLeft = "25ex";
    click_procesor.style.marginTop = "7ex";
    click_procesor.style.display='';

    if(count3 === 1)
    {
      for (let i = 0; i < 10; i++) {
        // Create and configure each child div element
        const childDiv = document.createElement('div');
        childDiv.classList.add(`child-div-${i}`);
        childDiv.style.marginTop = '10px';
        childDiv.style.width = '100%';
        childDiv.style.height = '100px';
        childDiv.style.backgroundColor = 'rgb(213, 215, 219)';
        childDiv.style.marginBottom = "10px";
        const img = document.createElement("img");
        img.src = pic_proc[i]; // Set the image url
        img.style.width = '100px';
        img.style.height = '100px';
      
        // Create a text node
        let text = document.createTextNode(`${proc[i]}`);
      
        // Create a button element
        let button = document.createElement("button");
        button.innerText = `${price[i]}`;
        button.style.height = '100px';
        button.style.width = '100px';
        button.style.right = '0';
    
        button.style.position = 'absolute';
      
        // Append the image, text, and button elements to the child div
        childDiv.appendChild(img);
        childDiv.appendChild(text);
        childDiv.appendChild(button);
      
        // Append each child div to the parent div
        click_procesor.appendChild(childDiv);

        let b = localStorage.getItem(`Button_Proc${i}`);
        
        if(button.outerText === b)
        {
            button.textContent = "Bought";
            button.disabled = true;
        }
        button.onclick = () =>{

          mouse_click.play();
          
          if(money_num >= price_num[i])
          {
            localStorage.setItem(`Button_Proc${i}`, button.outerText);
            const b = true;
            tmp2=b;
            button.style.color='gray';
            button.textContent='Bought';
            money_num -= price_num[i];
            money.textContent = money_num;
            button.disabled = true; 
            count_proc++;
            Processor.textContent = `Processors : ${count_proc}`;
            if(count_proc === 5)
            {
              Levelup++;
              levelElement.textContent=Levelup;
              localStorage.setItem('Level', Levelup);
            }else if(count_proc === 9)
            {
              Levelup++;
              levelElement.textContent=Levelup;
              localStorage.setItem('Level', Levelup);
            }
          }
         
        }
  
      }
    }
    

    
 
    
  }
  else if(count3 % 2 === 0)
  {
    click_procesor.style.display='none';
  }

}








tmp4 = false;
count4 = 0;
wallet.onclick  = () =>{
  mouse_click.play();
  count4++;
  const click_money = document.getElementById('click_money');
  const game_image = document.getElementById('game_image');
  const game = document.getElementById('game');
  const game_buy = document.getElementById('game_buy');
  const fourth = document.getElementById('fourth');
  if(count4 % 2 != 0)
  {
    click_money.style.backgroundColor = 'rgb(142, 150, 163)';
    click_money.style.height = "30ex";
    click_money.style.width = '40ex';
    click_money.style.fontSize = '40px';
    click_money.style.position = 'absolute';
    click_money.style.marginLeft = "25ex";
    click_money.style.marginTop = "7ex";
    click_money.style.display='';

   

 
    
  }
  if(count4 % 2 === 0)
  {
    click_money.style.display='none';
  }

  game_buy.onclick = () =>{
    mouse_click.play();
    if(money_num >= price_num[i])
          {
           
            const b = true;
            tmp2=b;
            button.style.color='gray';
            button.textContent='Bought';
            money_num -= price_num[i];
            money.textContent = money_num;
            button.disabled = true; 
          }
  }
}


tmp5 = false;
count5 = 0;
sales.onclick  = () =>{
  mouse_click.play();
  count5++;
  const click_sales = document.getElementById('click_sale');
  
  let code_to_money = [100, 158, 3000, 8000, 66000000, 300000, 3000000, 5000000, 39000000, 122000000];
  let code = ['200', '300', '6k', '14k', '106k', '460k', '4M', '6M', '47M', '135M'];
  let code_num = [200, 300, 6000, 14000, 106000, 460000, 4000000, 6000000, 47000000, 135000000];
  let work = ["Автокликер", "Чат бот", "Чит для игры", "Одностраничник", "Простая мобильная игра", "Драйвер устройства", "Сайт c рекламой", "Программа для Windows", "Простая компьютерная игра", "Фикс бага в программе", "Программа на нейроной сети"];
  const pic_game = ['./Game/autoclicker.png', './Game/chatbot.png', './Game/gamecheat.png', './Game/landingpage.png', './Game/simplemobilegame.png', './Game/devicedriver.png', './Game/sitewithads.png', './Game/windowsprogram.png', './Game/simplecomputergame.png', './Game/bugfixintheprogram.png'];
  if(count5 % 2 != 0)
  {
    click_sales.style.backgroundColor = 'rgb(142, 150, 163)';
    click_sales.style.height = "30ex";
    click_sales.style.width = '40ex';
    click_sales.style.fontSize = '40px';
    click_sales.style.position = 'absolute';
    click_sales.style.marginLeft = "25ex";
    click_sales.style.marginTop = "7ex";
    click_sales.style.display='';

    if(count5 === 1)
    {
      for (let i = 0; i < 10; i++) {
        // Create and configure each child div element
        const childDiv = document.createElement('div');
        childDiv.classList.add(`child-div-${i}`);
        childDiv.style.marginTop = '10px';
        childDiv.style.width = '100%';
        childDiv.style.height = '100px';
        childDiv.style.backgroundColor = 'rgb(213, 215, 219)';
        childDiv.style.marginBottom = "10px";
        const img = document.createElement("img");
        img.src = pic_game[i];
        img.style.width = '100px';
        img.style.height = '100px';
      
        // Create a text node
        let text = document.createTextNode(`${work[i]}`);
      
        // Create a button element
        let button = document.createElement("button");
        button.innerText = `${code[i]}`;
        button.style.height = '100px';
        button.style.width = '100px';
        button.style.right = '0';
    
        button.style.position = 'absolute';
      
        // Append the image, text, and button elements to the child div
        childDiv.appendChild(img);
        childDiv.appendChild(text);
        childDiv.appendChild(button);
      
        // Append each child div to the parent div
        click_sales.appendChild(childDiv);
        let k = 1000;
        button.onclick = () =>{
          mouse_click.play();
          
          
          if(count >= code_num[i])
          {
            localStorage.setItem('Button_Code', button.outerText);
            count -= code_num[i];
            count_click.textContent = count;
            money.textContent = money_num + code_to_money[i];
            money_num = Number(money.textContent);
            localStorage.setItem('Count', count);
            
          }
          
        }
  
      }
    }
    
    
  }
  else if(count5 % 2 === 0)
  {
    click_sales.style.display='none';
  }
}







tmp6 = false;
count6 = 0;
quest.onclick  = () =>{
  mouse_click.play();
  count6++;
  const click_quest = document.getElementById('click_quest');
  price_q = [3000, 5000, 31000, 90000, 970000, 12000000, 103000000, 240000000, 3000000000, 19000000000];
  let q = ["Погулять в парке[-3k$]", "Съездить на дачу[-5k$]", "Сходить в кино[-31k$]", "Сходить в музей[-90k$]", "Сходить на страйкбол[-970k$]",
"Провести обучающие лекции[-12M$]", "Поехать на CTF[-103M$]", "Прыгнуть с парашютом[-240M$]", "Слетать в Францию[-3B$]", "Слетать в космос[-19B$]"];
  if(count6 % 2 != 0)
  {
    click_quest.style.backgroundColor = 'rgb(142, 150, 163)';
    click_quest.style.height = "30ex";
    click_quest.style.width = '40ex';
    click_quest.style.fontSize = '40px';
    click_quest.style.position = 'absolute';
    click_quest.style.marginLeft = "25ex";
    click_quest.style.marginTop = "7ex";
    click_quest.style.display='';

    
    for (let i = 0; i < 10; i++) {
      let button = document.createElement("button");
      button.innerText = `${q[i]}`;
      button.style.height = '100px';
      button.style.width = '100%';
      button.style.right = '0';
      button.style.color = "black";
      button.style.marginTop = '10px';

      let b = localStorage.getItem(`Button_Quest${i}`);
      if(button.outerText === b)
      {
          button.textContent = "Bought";
          button.disabled = true;
      }
      click_quest.appendChild(button);
      button.onclick = () =>{
        mouse_click.play();
        if(money_num >= price_q[i])
        {
          localStorage.setItem(`Button_Quest${i}`, button.outerText);
          money_num -= price_q[i];
          count_click.textContent = money_num;
          money.textContent = money_num;
          money_num = Number(money.textContent);
          count_quest++;
          q.textContent = `Quest : ${count_quest}`;
          if(count_quest === 5)
          {
            Levelup++;
            levelElement.textContent=Levelup;
            localStorage.setItem('Level', Levelup);
          }
          else if(count_quest === 9)
          {
            Levelup++;
            levelElement.textContent=Levelup;
            localStorage.setItem('Level', Levelup);
          }
          
        }
        
      }
    }
    
    document.body.appendChild(click_quest);
    
    

  }
  if(count6 % 2 === 0)
  {
    click_quest.style.display='none';
  }

}



count7 = 0;
tmp7 = false;
setting.onclick = () =>{
  mouse_click.play();
  count7++;
  const click_setting = document.getElementById('click_setting');
  const difficulty_level = document.getElementById('difficulty_level');
  const theme = document.getElementById('theme');
  const volume = document.getElementById('volume');
  const save = document.getElementById('save');
  const save_slote = document.getElementById('save_slote');
  const export_import = document.getElementById('export');
  const full_screen = document.getElementById('full_screen');
  const file = document.getElementById('file');
  
  if(count7 % 2 != 0)
  {

   
    
    click_setting.style.backgroundColor = 'rgb(142, 150, 163)';
    click_setting.style.height = "30ex";
    click_setting.style.width = '40ex';
    click_setting.style.fontSize = '40px';
    click_setting.style.position = 'absolute';
    click_setting.style.marginLeft = "25ex";
    click_setting.style.marginTop = "7ex";
    click_setting.style.display='';

    difficulty_level.style.backgroundColor = 'rgb(213, 215, 219)';
    difficulty_level.style.height = "30px";
    difficulty_level.style.width = '70px';
    difficulty_level.style.fontSize = '10px';
    difficulty_level.style.position = 'absolute';
    difficulty_level.style.marginLeft = "23px";
    difficulty_level.style.marginTop = "10px";
    difficulty_level.style.display= '';
    difficulty_level.textContent = 'difficulty_level';

    theme.style.backgroundColor = 'rgb(213, 215, 219)';
    theme.style.height = "30px";
    theme.style.width = '70px';
    theme.style.fontSize = '10px';
    theme.style.position = 'absolute';
    theme.style.marginLeft = "23px";
    theme.style.marginTop = "50px";
    theme.style.display= '';
    theme.textContent = 'theme';


    volume.style.backgroundColor = 'rgb(213, 215, 219)';
    volume.style.height = "30px";
    volume.style.width = '70px';
    volume.style.fontSize = '10px';
    volume.style.position = 'absolute';
    volume.style.marginLeft = "23px";
    volume.style.marginTop = "100px";
    volume.style.display= '';
    volume.textContent = 'volume';


    

    save.style.backgroundColor = 'rgb(213, 215, 219)';
    save.style.height = "30px";
    save.style.width = '70px';
    save.style.fontSize = '10px';
    save.style.position = 'absolute';
    save.style.marginLeft = "500px";
    save.style.marginTop = "10px";
    save.style.display= '';
    save.textContent = 'save';
    
    save.addEventListener('click', () => {
      const saveData = JSON.stringify(localStorage); // Получить данные из localStorage в виде строки JSON
      const blob = new Blob([saveData], {type: "application/json"}); // Создать новый объект Blob (бинарные данные) с типом JSON
      const url = URL.createObjectURL(blob); // Создать ссылку на объект Blob
    
      const link = document.createElement("a"); // Создать новый элемент "a" 
      link.setAttribute("href", url); // Установить ссылку на объект Blob в атрибут href элемента "a"
      link.setAttribute("download", "save.json"); // Установить имя файла
      link.click(); // Нажать ссылку для загрузки файла
    });


    save_slote.style.backgroundColor = 'rgb(213, 215, 219)';
    save_slote.style.height = "30px";
    save_slote.style.width = '70px';
    save_slote.style.fontSize = '10px';
    save_slote.style.position = 'absolute';
    save_slote.style.marginLeft = "500px";
    save_slote.style.marginTop = "50px";
    save_slote.style.display= '';
    save_slote.textContent = 'save_slote';

    let localcount = 0;
    let game_prog;
    save_slote.addEventListener('click', () => {
      let data = {}; // создаем пустой JSON объект
      localcount++;
      // проходимся по всем ключам в localStorage
      for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      data[key] = value; // добавляем значение в объект в формате {ключ: значение}
      } 

      
    
      saveGame(`Slot${localcount}`, data);});
    
      file.style.height = '50px';
      file.style.width = '150px';
      file.style.position = 'absolute';
      file.style.marginLeft = "500px";
      file.style.marginTop = "150px";
      file.onchange = () => {
        const input = event.target; // Получить элемент input
        const file = input.files[0]; // Получить первый выбранный файл
      
        const reader = new FileReader(); // Создать новый объект FileReader
        reader.onload = function() {
          const data = JSON.parse(reader.result); // Преобразовать строки JSON в объект JavaScript
          for (const key in data) { // Перебрать данные
            localStorage.setItem(key, data[key]); // Записать данные в localStorage
          }
      };


      
      
        reader.readAsText(file); // Читать выбранный файл как текст
      }

    export_import.style.backgroundColor = 'rgb(213, 215, 219)';
    export_import.style.height = "30px";
    export_import.style.width = '70px';
    export_import.style.fontSize = '10px';
    export_import.style.position = 'absolute';
    export_import.style.marginLeft = "500px";
    export_import.style.marginTop = "100px";
    export_import.style.display= '';
    export_import.textContent = 'export';

    full_screen.style.backgroundColor = 'rgb(213, 215, 219)';
    full_screen.style.height = "30px";
    full_screen.style.width = '70px';
    full_screen.style.fontSize = '10px';
    full_screen.style.position = 'absolute';
    full_screen.style.marginLeft = "500px";
    full_screen.style.marginTop = "200px";
    full_screen.style.display= '';
    full_screen.textContent = 'full_screen';

    
    full_screen.addEventListener('click', () => {
      mouse_click.play();
      if (document.fullscreenEnabled) {
        document.documentElement.requestFullscreen();
      }
    });
   
  }
  if(count7 % 2 === 0)
  {
    click_setting.style.display='none';
  }

  volume_count = 2;
  var slider = document.getElementById("myRange");
  slider.style.display = '';
  var audio = new Audio('fon_music.mp3');

 volume.onclick = () => {
  mouse_click.play();
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
   slider.oninput = () => {
      audio.volume = slider.value/100;
   }
   

}
}

function saveGame(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadGame(key) {
  const data = localStorage.getItem(key);
  if (data === null) {
    return null;
  }
  return JSON.parse(data);
}

