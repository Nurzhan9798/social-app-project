import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const article = {
    id: '1',
    title: 'Javascript news asfasjf asfjkask f',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'Nurzhan',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzAFp0zb3cTljbXKwEf7jdWQeU2RLWkyzBg&usqp=CAU',
    },
    type: [
        'IT',
        'SCIENCE',
        'POLITICS',
        'ECONOMICS',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;
const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.CARD,
};

export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];
DarkMode.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.CARD,
};

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];
OrangeMode.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.CARD,
};

export const LightModeEmpty = Template.bind({});
LightModeEmpty.args = {
    articles: [],
    isLoading: false,
    view: ArticleView.CARD,
};

export const DarkModeEmpty = Template.bind({});
DarkModeEmpty.decorators = [ThemeDecorator(Theme.DARK)];
DarkModeEmpty.args = {
    articles: [],
    isLoading: false,
    view: ArticleView.CARD,
};

export const OrangeModeEmpty = Template.bind({});
OrangeModeEmpty.decorators = [ThemeDecorator(Theme.ORANGE)];
OrangeModeEmpty.args = {
    articles: [],
    isLoading: false,
    view: ArticleView.CARD,
};

export const LighModeCardLoading = Template.bind({});
LighModeCardLoading.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.CARD,
};

export const DarkModeCardLoading = Template.bind({});
DarkModeCardLoading.decorators = [ThemeDecorator(Theme.DARK)];
DarkModeCardLoading.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.CARD,
};

export const OrangeModeCardLoading = Template.bind({});
OrangeModeCardLoading.decorators = [ThemeDecorator(Theme.ORANGE)];
OrangeModeCardLoading.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.CARD,
};

export const LightModeList = Template.bind({});
LightModeList.args = {
    articles: new Array(4)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.LIST,
};

export const DarkModeList = Template.bind({});
DarkModeList.decorators = [ThemeDecorator(Theme.DARK)];
DarkModeList.args = {
    articles: new Array(4)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.LIST,
};

export const OrangeModeList = Template.bind({});
OrangeModeList.decorators = [ThemeDecorator(Theme.ORANGE)];
OrangeModeList.args = {
    articles: new Array(4)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.LIST,
};

export const LightModeLoading = Template.bind({});
LightModeLoading.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.LIST,
};

export const DarkModeListLoading = Template.bind({});
DarkModeListLoading.decorators = [ThemeDecorator(Theme.DARK)];
DarkModeListLoading.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.LIST,
};

export const OrangeModeListLoading = Template.bind({});
OrangeModeListLoading.decorators = [ThemeDecorator(Theme.ORANGE)];
OrangeModeListLoading.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.LIST,
};
