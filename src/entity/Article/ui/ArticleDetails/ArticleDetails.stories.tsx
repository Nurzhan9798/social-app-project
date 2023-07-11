import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Article } from 'entity/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';

const article = {
    id: '1',
    title: 'Javascript news asfasjf asfjkask f',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--oqV3akcU--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/pgnw91fs7tpxn0wyeqh2.jpg',
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
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'VIDEO',
            src: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        },
    ],
} as Article;
export default {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const LightModeLoading = Template.bind({});
LightModeLoading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const LightMode = Template.bind({});
LightMode.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const LightModeError = Template.bind({});
LightModeError.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
];

export const DarkModeLoading = Template.bind({});
DarkModeLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const DarkMode = Template.bind({});
DarkMode.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const DarkModeError = Template.bind({});
DarkModeError.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
];

export const OrangeModeLoading = Template.bind({});
OrangeModeLoading.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const OrangeModeError = Template.bind({});
OrangeModeError.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
];
