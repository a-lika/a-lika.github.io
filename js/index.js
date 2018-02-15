window.addEventListener("load", function() {

    var all_cities_list =["Астрахань","Акапулько","Алжир","Анкара","Афины","Амстердам","Ашхабад","Барселона","Бангкок","Берлин","Берн","Бостон","Братислава","Будапешт","Буэнос-Айрес","Бирмингем","Брест","Великий Новгород","Вена","Венеция","Вильнюс","Витебск","Владимир","Вашингтон","Валетта","Варшава","Гродно","Гамбург","Генуя","Гонконг","Геленджик","Гавана","Гетеборг","Гомель","Дрезден","Дублин","Дакка","Дакар","Дамаск","Дели","Денвер","Детройт","Душанбе","Дюссельдорф","Донецк","Дзержинск","Дубай","Днепропетровск","Евпатория","Екатеринбург","Ельня","Енисейск","Ереван","Ессентуки","Железноводск","Железногорск","Женева","Женева","Житомир","Жодино","Заславль","Загреб","Закопане","Зальцбург","Запорожье","Звенигород","Зеленогорск","Зеленоград","Занзибар","Иссык-Куль","Иерусалим","Ижевск","Иркутск","Исламабад","Кронштадт","Кандагар","Катовице","Караганда","Кабул","Казань","Каир","Калининград","Калуга","Канберра","Каракас","Киев","Карловы-Вары","Катманду","Квебек","Керчь","Кричев","Киров","Кишинев","Копенгаген","Краков","Краснодар","Красноярск","Курган","Лепель","Лас-Вегас","Лейпциг","Леон","Лилль","Ливерпуль","Липецк","Лиссабон","Лима","Лос-Анджелес","Луанда","Луганск","Львов","Любань","Люблин","Любляна","Люксембург","Майами","Мадрид","Магадан","Магнитогорск","Манила","Могилев","Мариуполь","Марсель","Манагуа","Минск","Махачкала","Мекка","Москва","Мехико","Мир","Милан","Можайск","Монреаль","Монровия","Монтевидео","Монте-Карло","Мурманск","Муром","Мцхета","Мюнхен","Нагасаки","Новополоцк","Несвиж","Нальчик","Нарва","Наро-Фоминск","Нджамена","Неаполь","Ницца","Новгород","Ногинск","Норильск","Нячанг","Нью-Йорк","Наровля","Нюнберг","Одесса","Одинцово","Оксфорд","Омаха","Омск","Орел","Оренбург","Орлеан","Орша","Осло","Оттава","Падуя","Палермо","Панама","Париж","Паттайя","Пекин","Пенза","Пермь","Пиза","Пномпень","Познань","Подольск","Полоцк","Полтава","Потсдам","Прага","Псков","Пхеньян","Пхукет","Пятигорск","Рио-де-Жанейро","Рабат","Рейкьявик","Реутов","Рига","Ровно","Ростов","Роттердам","Рудня","Рязань","Римини","Рим","Сакраменто","Самара","Сан-Диего","Санкт-Петербург","Сан-Марино","Сан-Франциско","Сантьяго","Сан-Хосе","Сараево","Саранск","Саратов","Светлогорск","Севастополь","Сеул","Сидней","Сингапур","Сиэтл","Симферополь","Солигорск","София","Сочи","Спарта","Стамбул","Стокгольм","Страсбург","Таганрог","Тамбов","Ташкент","Тбилиси","Тернополь","Тирана","Токио","Тольятти","Томск","Торонто","Тула","Тверь","Турин","Тунис","Тюмень","Триполи","Тулуза","Торунь","Улан-Батор","Уральск","Ульяновск","Урюпинск","Уфа","Уссурийск","Ужгород","Улан-Удэ","Феодосия","Филадельфия","Флоренция","Фаниполь","Франкфурт-на-Майне","Феррара","Хабаровск","Хайфа","Ханой","Ханты-Мансийск","Хараре","Харлем","Хартум","Харьков","Хельсинки","Херсон","Химки","Хьюстон","Цицикар","Цюрих","Чебоксары","Чернь","Челябинск","Чернигов","Чикаго","Чита","Шамони","Шанхай","Шахты","Шацк","Штутгарт","Щецин","Щучье","Щёлково","Эдинбург","Электрогорск","Эр-Рияд","Эссен","Электросталь","Электроугли","Юджин","Южно-Сахалинск","Юрга","Юрмала","Якутск","Янгон","Ярославль","Ярцево","Ялта"];
    var all_city_copy = [],
        person_cities=[],
        comp_cities=[];
    all_city_copy = all_city_copy.concat(all_cities_list);
    this.person_cities = person_cities;
    this.comp_cities = comp_cities;

    function forEach(array) {
        for (var i = 0; i < array.length; i++)
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
    }

    forEach(all_cities_list);
    forEach(all_city_copy);
    forEach(person_cities);
    forEach(comp_cities);


    var submit = document.querySelector("#send_person"),
        text_person = document.querySelector("#text_person"),
        message = document.querySelector("#message"),
        info = document.querySelector("#info"),
        player = document.querySelector(".player"),
        person  = document.querySelector("#person"),
        comp = document.querySelector("#comp"),
        form = document.querySelector("form"),
        start = document.querySelector("#start"),
        text_comp = document.querySelector("#text_comp"),
        surrender = document.querySelector("#surrender"),
        rezult = document.querySelector("#rezults"),
        reload = document.querySelector("#reload"),
        see_rules = document.querySelector("#see_rules"),
        rules_info = document.querySelector("#rules_info"),
        rezults_list = document.querySelector(".rezults_list"),
        person_array = document.querySelector("#person_array"),
        comp_array = document.querySelector("#comp_array"),
        person_array_length = document.querySelector("#person_array_length"),
        comp_array_length = document.querySelector("#comp_array_length"),
        anew_button = document.querySelector("#anew_button"),
        anew = document.querySelector(".anew"),
        see_cities_list = document.querySelector(".see_cities_list"),
        cities_list = document.querySelector(".cities_list"),
        map  = document.querySelector("#map"),
        click_to_speak = document.querySelector("#click_to_speak"),
        exceptions = ["ь","ъ","ы","й"];


    see_rules.addEventListener("click", function() {
        if(rules_info.classList.contains("rules_visible"))  {
            person.style.cssText = "display: inline-block";
            comp.style.cssText = "display: inline-block";
            see_rules.textContent = "Смотреть правила";
            start.disabled=false;
            rules_info.classList.remove("rules_visible");
            cities_list.classList.add("cities_array");

        } else    {

            person.style.cssText = "display: none";
            comp.style.cssText = "display: none";
            see_rules.textContent = "Закрыть";
            start.disabled=true;
            rules_info.classList.add("rules_visible");
            cities_list.classList.remove("cities_array");
        }

    });

    cities_list.textContent = all_cities_list.join(', ');
    see_cities_list.addEventListener("click", function() {
        if(cities_list.classList.contains("cities_array"))  {
           cities_list.classList.remove("cities_array");
        }
        else    {
            cities_list.classList.add("cities_array");
        }
    });

    function step_comp()  {
        info.textContent = "Ход компьютера";
        text_person.disabled=true;
        send_person.disabled=true;
        click_to_speak.disabled=true;
        surrender.disabled=true;
        text_comp.value="";
        comp.classList.add("back_color");
        person.classList.remove("back_color");
    }

    function step_person(){
        setTimeout(function()  {
        info.textContent = "Ваш ход";
        text_person.disabled=false;
        send_person.disabled=false;
        click_to_speak.disabled=false;
        surrender.disabled=false;
        text_person.focus();
        text_person.value="";
        person.classList.add("back_color");
        comp.classList.remove("back_color");
    }, Math.random() * 2000)}

    function delete_value(name) {
        for (var i = 0; i < all_city_copy.length; i++) {
            if(all_city_copy[i] == name) {
                all_city_copy.splice(i, 1);
            }
        }
        return all_city_copy;
    }

    function last_value(array)   {

        var last_city = array[array.length-1],
            last_index = last_city[last_city.length-1],
            last_i;

        if(exceptions.indexOf(last_index) == -1) {
            last_i = last_city[last_city.length-1];

        }
        else {
            last_i = last_city[last_city.length-2];
        }
        return last_i.toUpperCase();
    }


    start.addEventListener("click", function() {
        var rand = Math.floor(Math.random() * 10);
        if(rand<5)  {
            step_person();
        }
        else    {
            step_comp();
            computer();
        }
        surrender.classList.remove("hide");
        click_to_speak.classList.remove("hide");

    });


    form.addEventListener("submit", function(event) {

         var value = text_person.value;
         value = value.trim();
         value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

         if(!value){
             message.textContent = "Введите название города";
         }
         else if(all_cities_list.indexOf(value) == -1){
             message.textContent = "Такого города нет в списке";
         }
         else if((comp_cities!="")&&(value.charAt(0)!= last_value(comp_cities))){
             message.textContent = "Название города должно начинаться на букву "+ last_value(comp_cities);
         }
         else if((person_cities.indexOf(value)!=-1) || (comp_cities.indexOf(value)!=-1))   {
             message.textContent = "Этот город уже называли";
         }
         else {
             person_cities.push(value);
             delete_value(value);
             message.textContent = "";
             step_comp();
             computer();
         }
             event.preventDefault();
    });


    function search_value(array, val)    {
         var city_name=[];
         for (var key in array)  {
             if(array[key].charAt(0)== val)
                 city_name.push(array[key]);
             var rand = Math.floor(Math.random() * city_name.length);

         }
          return city_name[rand];
    }


    function rezults()    {
        surrender.classList.add("hide");
        rezult.classList.remove("hide");
        reload.classList.remove("hide");
        click_to_speak.classList.add("hide");
    }

    function computer() {
        var city_name,
            city_value;
          if(person_cities!="")  {
               city_name = search_value(all_city_copy, last_value(person_cities));
                    if ((person_cities.indexOf(city_name)==-1) &&
                         (comp_cities.indexOf(city_name)==-1) &&
                         (city_name!=undefined))   {
                              comp_cities.push(city_name);
                              city_value = city_name;
                              city_value = city_value.charAt(0).toUpperCase() + city_value.slice(1).toLowerCase();
                              text_comp.value = city_value;
                              delete_value(city_name);

                                    if(search_value(all_city_copy, last_value(comp_cities))!=undefined) {
                                        step_person();
                                    }
                                    else  {
                                        info.textContent = "Вы проиграли";
                                        message.textContent = "В списке городов нет допустимых названий";
                                        comp.classList.add("winner");
                                        comp.classList.remove("back_color");
                                        person.classList.remove("back_color");
                                        text_person.value="";
                                        rezults();
                                    }
                    } else {
                          city_value = "Ой-ой-ой";
                          text_comp.value = city_value;
                          info.textContent = "Вы выиграли";
                          comp.classList.remove("back_color");
                          person.classList.add("winner");
                          rezults();
                    }
          } else {
                city_name = all_city_copy[Math.floor(Math.random() * all_city_copy.length)];
                comp_cities.push(city_name);
                city_value = city_name;
                text_comp.value = city_value;
                delete_value(city_name);
                step_person();

          }
    }

    reload.addEventListener("click", restart, false);
    anew.addEventListener("click", restart, false);

        function restart() {
            location.reload();
        }

    surrender.addEventListener("click", function() {
        info.textContent = "Вы проиграли";
        message.textContent = "Вы сдались";
        comp.classList.add("winner");
        comp.classList.remove("back_color");
        person.classList.remove("back_color");
        surrender.classList.add("hide");
        click_to_speak.classList.add("hide");
        text_person.disabled=true;
        send_person.disabled=true;
        click_to_speak.disabled=true;
        rezults();
    });

    rezult.addEventListener("click", function() {
        person.style.cssText = "display: none";
        comp.style.cssText = "display: none";
        see_rules.style.cssText = "display: none";
        rezults_list.classList.add("rezults_list_visible");
        person_array.textContent = person_cities.join(', ');
        comp_array.textContent = comp_cities.join(', ');
        person_array_length.textContent = person_cities.length;
        comp_array_length.textContent = comp_cities.length;
        info.style.cssText = "padding-bottom: 10px";
        anew_button.style.cssText = "display: block";
        map.classList.add("map_visible");
        init();
    });


}, false);

