import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'suppliers2';
  filteredWWBItems: any = '';
  aboutInfo = 
    {
      suppliersMain: {
        alias: "suppliers-main",
        title: "Постачальникам",
        details: `<p>Міністерство охорони здоров'я України довело до МЗУ напрями закупівлі лікарських засобів та медичних товарів за бюджетною програмою КПКВК 2301400 «Забезпечення медичних заходів окремих державних програм та комплексних заходів програмного характеру».</p>
                  <p>Крім того, МЗУ закуповують медвироби та обладнання у межах ініціативи Президента України UNITED24.</p>
                  <p>Основні нормативно-правові акти, перелік напрямів до закупівлі, номенклатуру та проєкт типового договору можна переглянути нижче.</p>`,
        type: "imageButtonsInCode",
        position: "1",
        img: "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers1.svg",
        actions: [
          {
            link: "",
            title: "Напрями до закупівлі"
          },
          {
            link: "https://zakon.rada.gov.ua/laws/show/216-2022-%D0%BF#Text",
            title: "Номенклатура",
            tooltip: "Список медичних товарів, що закуповуються для програм охорони здоров'я"
          },
          {
            link: "https://drive.google.com/drive/u/0/folders/1BC7qRLrf9YRV-GhR9rQcSV0SYFi02uZC",
            title: "Типовий договір",
            tooltip: "Шаблон договору про закупівлю лікарських засобів"
          },
          {
            link: "https://app.powerbi.com/view?r=eyJrIjoiMzIzOGNjMmItOGJjMS00NGUzLTlmOWMtODMyM2YyNmZmYjMzIiwidCI6ImJlNDg5NWQzLTI0ZDAtNDQyZS04ZGI3LTcxMWQzYjQxOGQ1YSIsImMiOjl9",
            title: "Календар закупівель"
          }
        ]
      },
      "howWeBuy": {
        "title": "Як ми закуповуємо?",
        "img": "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers2.svg",
        "content": [
            {
                "alias": "prozorro",
                "title": "Prozorro",
                "details": "Відкриті торги з Особливостями згідно Постанови Кабінету Міністрів України від 12 жовтня 2022 р. № 1178 (зі змінами).",
                "type": "imageButton",
                "position": "1",
                "img": "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers3.svg",
                "actions": [
                    {
                        "link": "https://prozorro.gov.ua/",
                        "title": "Основні вимоги"
                    }
                ]
            },
            {
                "alias": "prozorro-market",
                "title": "Prozorro Market",
                "details": "Закупівлі здійснюються через інструмент оголошення запиту пропозицій постачальників. ",
                "type": "imageButton",
                "position": "2",
                "img": "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers4.svg",
                "actions": [
                    {
                        "link": "",
                        "title": "Про Prozorro Market"
                    }
                ]
            },
            {
                "alias": "suppliers-sap-ariba",
                "title": "SAP Ariba",
                "details": "Використовується для ринкових консультацій, опитувань, укладання договорів, комунікацій з постачальниками тощо.",
                "type": "imageButton",
                "position": "3",
                "img": "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers5.svg",
                "actions": [
                    {
                        "link": "https://drive.google.com/drive/folders/1TBdfPT262erFOq0DwwfvRYWvQgoimX95?usp=drive_link",
                        "title": "Інструкція"
                    },
                    {
                        "link": "https://s1-eu.ariba.com/Sourcing/Main/aw?awh=r&awssk=DdOqZB8mdUZmWEhW&realm=MinistryOfHealthofUkraine&dard=1",
                        "title": "Реєстрація"
                    }
                ]
            }
        ]
    },
      "tenderProcedures": {
        "title": "Тендерні процедури",
        "img": "https://admin.mpu-dev.meddata.com.ua/images/site/suppliers/suppliers6.svg",
        "description": "<p>Публічні закупівлі – це процес придбання Замовником товарів, послуг і робіт у Постачальника у порядку, встановленому законодавством. Закупівлі мають на меті забезпечити ефективне використання державних коштів та відкритість і прозорість на всіх етапах закупівель.</p>\r\n<p>Законодавча база публічних закупівель в Україні включає низку важливих документів, серед яких значну роль у воєнний час відіграє Постанова № 1178 від 12 жовтня 2022 р. (зі змінами). Проте, Закон України “Про публічні закупівлі” продовжує діяти у воєнний час паралельно із Особливостями (ПКМУ № 1178), але порядок закупівель у воєнний час визначено саме в Особливостях.</p>",
        "content": [
            {
                "alias": "pro-oholoshennia-zakupivli",
                "title": "Про оголошення закупівлі",
                "details": "<p>У системі Prozorro на авторизованому електронному майданчику замовник публікує оголошення про проведення закупівлі відповідно до Особливостей та Закону.</p>\r\n<p>Строк для подання тендерних пропозицій не може бути менше ніж сім днів з дня оприлюднення в електронній системі закупівель оголошення про проведення відкритих торгів на закупівлю товарів, послуг.</p>\r\n<p>Оцінка тендерної пропозиції проводиться електронною системою закупівель автоматично на основі критеріїв і методики оцінки, визначених замовником у тендерній документації.</p>",
                "type": "simpleFull",
                "position": "1"
            },
            {
                "alias": "kvalifikatsiini-vymohy",
                "title": "Кваліфікаційні вимоги",
                "details": "<p>Під час здійснення закупівлі товарів відповідно до Закону, замовник може, але не зобов'язаний застосувати один або декілька кваліфікаційних критеріїв.</p>\r\n<p>1. наявність в учасника процедури закупівлі обладнання, матеріально-технічної бази та технологій;</p>\r\n<p>2. наявність в учасника процедури закупівлі працівників відповідної кваліфікації, які мають необхідні знання та досвід;</p>\r\n<p>3. наявність документально підтвердженого досвіду виконання аналогічного (аналогічних) за предметом закупівлі договору (договорів);</p>\r\n<p>4. наявність фінансової спроможності, яка підтверджується фінансовою звітністю.</p>",
                "type": "simpleFull",
                "position": "2"
            },
            {
                "alias": "stroky-provedennia",
                "title": "Строки проведення",
                "details": "<p>Строки проведення процедур закупівлі встановлені Законом України “Про публічні закупівлі” та Особливостями в залежності від виду закупівлі та підстав, які можуть впливати на продовження таких строків.</p>",
                "type": "simpleFull",
                "position": "3"
            }
        ]
    },
"whatWeBuy": {
        "title": "Що ми закуповуємо у 2024 році",
        "description": "<p>З 2023 міжнародні організації більше не здійснюють закупівлі ліків та медвиробів, а Медичні закупівлі України (МЗУ) є закупівельною агенцією за централізованими напрямами в сфері охорони здоров'я.</p>\r\n<p>До МЗУ доведено 24 централізовані напрями:</p>",
        "content": [
            {
                "alias": "khimioterapevtychni-preparaty-radiofarmpreparaty-ta-preparaty-suprovodu-dlia-likuvannia-onkolohichnykh-khvorykh",
                "title": "Хіміотерапевтичні препарати, радіофармпрепарати та препарати супроводу для лікування онкологічних хворих",
                "details": "",
                "type": "imageButton",
                "position": "1",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-21022024--291-pro-zatverdzhennja-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medychni-vyroby-dlia-slukhoprotezuvannia",
                "title": "Медичні вироби для слухопротезування",
                "details": "",
                "type": "imageButton",
                "position": "2",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-23042024--695-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "likarski-zasoby-dlia-zabezpechennia-ditei-khvorykh-na-hemofiliiu-typiv-a-abo-v-abo-khvorobu-villebranda",
                "title": "Лікарські засоби для забезпечення дітей, хворих на гемофілію типів А або В або хворобу Віллебранда",
                "details": "",
                "type": "imageButton",
                "position": "3",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-02042024--560-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "zakupivlia-medykamentiv-dlia-hromadian-khvorykh-na-mukovistsydoz",
                "title": "Лікарські засоби для забезпечення дорослих, хворих на гемофілію типів А або В або хворобу Віллебранда",
                "details": "",
                "type": "imageButton",
                "position": "4",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-23042024--695-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "reaktivi-dlya-provedennya-masovogo-skriningu-novonarodzhenikh-na-fenilketonuriyu-vrodzhenij-gipotireoz-mukovistsidoz-ta-adrenogenitalnij-sindrom",
                "title": "Закупівля медикаментів для громадян, хворих на муковісцидоз",
                "details": "",
                "type": "imageButton",
                "position": "5",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-21022024--291-pro-zatverdzhennja-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "zakupivlia-tovariv-robit-i-posluh-v-ramkakh-realizatsii-proiektu-shchodo-stvorennia-laboratorii-syntezu-radiofarmatsevtychnykh-likarskykh-zasobiv-zakupivliu-obladnannia-dlia-zakladiv-okhorony-zdorovia-v-tomu-chysli-dlia-klasternykh-ta-nadklasternykh-zakladiv-okhorony-zdorovia-shcho-nalezhat-do-sfery-upravlinnia-moz-ta-derzhavnoho-upravlinnia-spravamy-a-takozh-dlia-osnashchennia-laboratorii-tsentra",
                "title": "Закупівля товарів, робіт і послуг в рамках реалізації проєкту щодо створення лабораторій синтезу радіофармацевтичних лікарських засобів, закупівлю обладнання для закладів охорони здоров’я, в тому числі для кластерних та надкластерних, закладів охорони здоров’я, що належать до сфери управління МОЗ та Державного управління справами, а також для оснащення лабораторій центрального органу виконавчої влади, що реалізує державну політику у сфері контролю якості та безпеки лікарських засобів",
                "details": "",
                "type": "imageButton",
                "position": "6",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-19042024--670-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medychni-vyroby-dlia-hromadian-iaki-strazhdaiut-na-buloznyi-epidermoliz",
                "title": "Медичні вироби для громадян, які страждають на бульозний епідермоліз",
                "details": "",
                "type": "imageButton",
                "position": "7",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-14032024--433-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medychni-vyroby-dlia-hromadian-iaki-strazhdaiut-na-idiopatychnu-simeinu-dystoniiu-spastychnu-kryvoshyiu-idiopatychnu-roto-lytsovu-dystoniiu",
                "title": "Медичні вироби для громадян, які страждають на ідіопатичну сімейну дистонію, спастичну кривошию, ідіопатичну рото-лицьову дистонію",
                "details": "",
                "type": "imageButton",
                "position": "6",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-21022024--291-pro-zatverdzhennja-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medykamenty-dlia-khvorykh-na-infektsiini-zakhvoriuvannia-shcho-suprovodzhuiutsia-vysokym-rivnem-letalnosti",
                "title": "Медикаменти для хворих на інфекційні захворювання, що супроводжуються високим рівнем летальності",
                "details": "",
                "type": "imageButton",
                "position": "7",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-17052024--853-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli-ukraini-za",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medykamenty-ta-medychni-vyroby-dlia-diahnostyky-ta-likuvannia-hromadian-iaki-khvoriiut-na-virusni-hepatyty-v-i-s",
                "title": "Медикаменти та медичні вироби для діагностики та лікування громадян, які хворіють на вірусні гепатити В і С",
                "details": "",
                "type": "imageButton",
                "position": "8",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-23042024--695-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medykamenty-dlia-likuvannia-khvorykh-na-rozsiianyi-skleroz",
                "title": "Медикаменти для лікування хворих на розсіяний склероз",
                "details": "",
                "type": "imageButton",
                "position": "9",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-04032024--369-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medykamenty-dlia-ditei-khvorykh-na-dytiachyi-tserebralnyi-paralich",
                "title": "Медикаменти для дітей, хворих на дитячий церебральний параліч",
                "details": "",
                "type": "imageButton",
                "position": "10",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-21022024--291-pro-zatverdzhennja-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "likarski-zasoby-ta-medychni-vyroby-dlia-likuvannia-ditei-khvorykh-na-onkolohichni-ta-onkohematolohichni-zakhvoriuvannia-ta-provedennia-transplantatsii-hemopoetychnykh-stovburovykh-klityn-ditiam-i-doroslym",
                "title": "Лікарські засоби та медичні вироби для лікування дітей, хворих на онкологічні та онкогематологічні захворювання, та проведення трансплантації гемопоетичних стовбурових клітин дітям і дорослим",
                "details": "",
                "type": "imageButton",
                "position": "11",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-02042024--560-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "likarski-zasoby-dlia-likuvannia-hromadian-khvorykh-na-rezystentnu-formu-iuvenilnoho-revmatoidnoho-artrytu",
                "title": "Лікарські засоби для лікування громадян, хворих на резистентну форму ювенільного ревматоїдного артриту",
                "details": "",
                "type": "imageButton",
                "position": "12",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-21022024--291-pro-zatverdzhennja-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medykamenty-dlia-hromadian-khvorykh-na-pervynni-vrodzheni-imunodefitsyty",
                "title": "Медикаменти для громадян, хворих на первинні (вроджені) імунодефіцити та хворобу Кавасакі",
                "details": "",
                "type": "imageButton",
                "position": "13",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-17052024--853-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli-ukraini-za",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medykamenty-dlia-hromadian-iaki-strazhdaiut-na-orfanni-metabolichni-zakhvoriuvannia",
                "title": "Медикаменти для громадян, які страждають на орфанні метаболічні захворювання",
                "details": "",
                "type": "imageButton",
                "position": "14",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-14032024--433-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medykamenty-dlia-ditei-khvorykh-na-nanizm-riznoho-pokhodzhennia",
                "title": "Медикаменти для дітей, хворих на нанізм різного походження",
                "details": "",
                "type": "imageButton",
                "position": "15",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-21022024--291-pro-zatverdzhennja-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medychni-vyroby-dlia-provedennia-ortopedychnykh-travmatolohichnykh-ta-neirokhirurhichnykh-operatyvnykh-vtruchan",
                "title": "Медичні вироби для проведення ортопедичних, травматологічних та нейрохірургічних оперативних втручань",
                "details": "",
                "type": "imageButton",
                "position": "16",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-23042024--695-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "likarski-zasoby-dlia-ditei-khvorykh-na-rozlady-psykhiky-ta-povedinky-iz-spektra-autyzmu-z-shyzofreniieiu-afektyvnymy-rozladamy-hiperkinetychnymy-rozladamy-ta-epilepsiieiu",
                "title": "Лікарські засоби для дітей, хворих на розлади психіки та поведінки із спектра аутизму, з шизофренією, афективними розладами, гіперкінетичними розладами та епілепсією",
                "details": "",
                "type": "imageButton",
                "position": "18",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-04032024--369-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "likarski-zasoby-ta-medychni-vyroby-dlia-zakladiv-okhorony-zdorovia-dlia-zabezpechennia-likuvannia-khvorykh-iz-sertsevo-sudynnymy-ta-sudynnomozkovymy-zakhvoriuvanniamy",
                "title": "Лікарські засоби та медичні вироби для закладів охорони здоров’я для забезпечення лікування хворих із серцево-судинними та судинномозковими захворюваннями",
                "details": "",
                "type": "imageButton",
                "position": "19",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-23042024--695-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medykamenty-dlia-hromadian-iaki-strazhdaiut-na-lehenevu-arterialnu-hipertenziiu",
                "title": "Медикаменти для громадян, які страждають на легеневу артеріальну гіпертензію",
                "details": "",
                "type": "imageButton",
                "position": "20",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-21022024--291-pro-zatverdzhennja-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "medychni-vyroby-dlia-zabezpechennia-rozvytku-donorstva-krovi-ta-ii-komponentiv",
                "title": "Медичні вироби для забезпечення розвитку донорства крові та її компонентів",
                "details": "",
                "type": "imageButton",
                "position": "21",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-02042024--560-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "imunobiolohichni-preparaty-dlia-provedennia-imunoprofilaktyky-naselennia-vyroby-dlia-zabezpechennia-umov-temperaturnoho-kontroliu-imunobiolohichnykh-preparativ-ta-medychni-vyroby",
                "title": "Імунобіологічні препарати для проведення імунопрофілактики населення, вироби для забезпечення умов температурного контролю імунобіологічних препаратів та медичні вироби",
                "details": "",
                "type": "imageButton",
                "position": "22",
                "actions": [
                    {
                        "link": "https://moz.gov.ua/article/ministry-mandates/nakaz-moz-ukraini-vid-23042024--695-pro-zatverdzhennja-zmin-do-zvedenih-pokaznikiv-100--potrebi-u-likarskih-zasobah-medichnih-virobah-ta-dopomizhnih-zasobah-do-nih-scho-zakupovuvatimutsja-derzhavnim-pidpriemstvom-medichni-zakupivli",
                        "title": ""
                    }
                ]
            },
            {
                "alias": "nadannia-medychnoi-dopomohy-v-umovakh-voiennoho-stanu-v-ukraini",
                "title": "Надання медичної допомоги в умовах воєнного стану в Україні",
                "details": "",
                "type": "imageButton",
                "position": "24"
            }
        ]
    },
    "publicProcurement": {
      "title": "Публічні закупівлі",
      "actions": {
          "link": "#",
          "title": "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044c \u0432\u0441\u0456"
      },
        "content": [
          {
            "alias": "ua-2024-05-17-003740-a",
            "title": "\u0424\u0430\u0440\u043c\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f (\u0414\u0430\u0437\u0430\u0442\u0438\u043d\u0456\u0431 70 \u043c\u0433)",
            "type": "public-procurement",
            "id": 50663,
            "number": "\u0414\u041a 021:2015 \u2013 33600000-6",
            "idNumber": "ID \u043d\u043e\u043c\u0435\u0440: UA-2024-05-17-003740-a",
            "action": {
                "link": "https:\/\/prozorro.gov.ua\/tender\/UA-2024-05-17-003740-a",
                "title": "UA-2024-05-17-003740-a"
            }
        },
        {
            "alias": "ua-2024-05-17-011293-a",
            "title": "\u0424\u0430\u0440\u043c\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f (\u041b\u0435\u0432\u0435\u0442\u0438\u0440\u0430\u0446\u0435\u0442\u0430\u043c 500 \u043c\u0433)",
            "type": "public-procurement",
            "id": 50669,
            "number": "\u0414\u041a 021:2015 \u2013 33600000-6",
            "idNumber": "ID \u043d\u043e\u043c\u0435\u0440: UA-2024-05-17-011293-a",
            "action": {
                "link": "https:\/\/prozorro.gov.ua\/tender\/UA-2024-05-17-011293-a",
                "title": "UA-2024-05-17-011293-a"
            }
        },
        {
            "alias": "ua-2024-05-17-011257-a",
            "title": "\u0424\u0430\u0440\u043c\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f (\u0421\u043e\u043b\u0456 \u0432\u0430\u043b\u044c\u043f\u0440\u043e\u0454\u0432\u043e\u0457 \u043a\u0438\u0441\u043b\u043e\u0442\u0438 300 \u043c\u0433)",
            "type": "public-procurement",
            "id": 50672,
            "number": "\u0414\u041a 021:2015 \u2013 33600000-6",
            "idNumber": "ID \u043d\u043e\u043c\u0435\u0440: UA-2024-05-17-011257-a",
            "action": {
                "link": "https:\/\/prozorro.gov.ua\/tender\/UA-2024-05-17-011257-a",
                "title": "UA-2024-05-17-011257-a"
            }
        },
        {
            "alias": "ua-2024-05-17-011148-a",
            "title": "\u0424\u0430\u0440\u043c\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f (\u0413\u043e\u043b\u0456\u043c\u0443\u043c\u0430\u0431 50 \u043c\u0433)",
            "type": "public-procurement",
            "id": 50671,
            "number": "\u0414\u041a 021:2015 \u2013 33600000-6",
            "idNumber": "ID \u043d\u043e\u043c\u0435\u0440: UA-2024-05-17-011148-a",
            "action": {
                "link": "https:\/\/prozorro.gov.ua\/tender\/UA-2024-05-17-011148-a",
                "title": "UA-2024-05-17-011148-a"
            }
        },
        {
            "alias": "ua-2024-05-17-010686-a",
            "title": "\u0424\u0430\u0440\u043c\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f (\u0422\u0456\u043e\u0442\u0435\u043f\u0430 100 \u043c\u0433)",
            "type": "public-procurement",
            "id": 50670,
            "number": "\u0414\u041a 021:2015 \u2013 33600000-6",
            "idNumber": "ID \u043d\u043e\u043c\u0435\u0440: UA-2024-05-17-010686-a",
            "action": {
                "link": "https:\/\/prozorro.gov.ua\/tender\/UA-2024-05-17-010686-a",
                "title": "UA-2024-05-17-010686-a"
            }
        },
        {
            "alias": "ua-2024-05-16-012077-a",
            "title": "\u0424\u0430\u0440\u043c\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f (\u0414\u0430\u0437\u0430\u0442\u0438\u043d\u0456\u0431 50 \u043c\u0433)",
            "type": "public-procurement",
            "id": 50667,
            "number": "\u0414\u041a 021:2015 \u2013 33600000-6",
            "idNumber": "ID \u043d\u043e\u043c\u0435\u0440: UA-2024-05-16-012077-a",
            "action": {
                "link": "https:\/\/prozorro.gov.ua\/tender\/UA-2024-05-16-012077-a",
                "title": "UA-2024-05-16-012077-a"
            }
        },
        {
            "alias": "ua-2024-05-16-011725-a",
            "title": "\u0424\u0430\u0440\u043c\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f (\u0424\u0443\u043b\u0432\u0435\u0441\u0442\u0440\u0430\u043d\u0442 250 \u043c\u0433)",
            "type": "public-procurement",
            "id": 50661,
            "number": "\u0414\u041a 021:2015 \u2013 33600000-6",
            "idNumber": "ID \u043d\u043e\u043c\u0435\u0440: UA-2024-05-16-011725-a",
            "action": {
                "link": "https:\/\/prozorro.gov.ua\/tender\/UA-2024-05-16-011725-a",
                "title": "UA-2024-05-16-011725-a"
            }
        },
        {
            "alias": "ua-2024-05-16-011676-a",
            "title": "\u0424\u0430\u0440\u043c\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f (\u041a\u0430\u0440\u0431\u043e\u043f\u043b\u0430\u0442\u0438\u043d 50 \u043c\u0433 \u0430\u0431\u043e 150 \u043c\u0433)",
            "type": "public-procurement",
            "id": 50660,
            "number": "\u0414\u041a 021:2015 \u2013 33600000-6",
            "idNumber": "ID \u043d\u043e\u043c\u0435\u0440: UA-2024-05-16-011676-a",
            "action": {
                "link": "https:\/\/prozorro.gov.ua\/tender\/UA-2024-05-16-011676-a",
                "title": "UA-2024-05-16-011676-a"
            }
        },
        {
            "alias": "ua-2024-05-16-011639-a",
            "title": "\u041c\u0435\u0434\u0438\u0447\u043d\u0456 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438  (\u0421\u0435\u0440\u0432\u0435\u0442\u043a\u0438 \u0437 \u043d\u0435\u0442\u043a\u0430\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443, \u0441\u0442\u0435\u0440\u0438\u043b\u044c\u043d\u0456, 10 \u0445 10 \u0441\u043c, (2 \u0448\u0442\u0443\u043a\u0438))",
            "type": "public-procurement",
            "id": 50664,
            "number": "\u0414\u041a 021:2015 \u2013 33140000-3",
            "idNumber": "ID \u043d\u043e\u043c\u0435\u0440: UA-2024-05-16-011639-a",
            "action": {
                "link": "https:\/\/prozorro.gov.ua\/tender\/UA-2024-05-16-011639-a",
                "title": "UA-2024-05-16-011639-a"
            }
        }
        ]
    }
    };
}
