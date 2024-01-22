const images = require.context('./images', true, /\.png$/);

const parts = {
    heads: [
        {
            id: 1,
            description:
                'Голова робота с необычно большим глазом и телоскоп-ной шеей - отлично подходит для исследования больших пространств.',
            title: 'Большой циклоп',
            src: images('./head-big-eye.png'),
            type: 'heads',
            cost: 1225.5,
        },
        {
            id: 2,
            description:
                'Дружелюбная голова робота с двумя глазами и улыбкой - отлично подходит для домашнего использования.',
            title: 'Дружелюбный бот',
            src: images('./head-friendly.png'),
            cost: 945.0,
            type: 'heads',
            onSale: true,
        },
        {
            id: 3,
            description:
                'Большая трехглазая голова с измельчителем вместо рта - отлично подходит для измельчения легких медалей или измельчения документов.',
            title: 'Уничтожитель бумаг',
            src: images('./head-shredder.png'),
            type: 'heads',
            cost: 1275.5,
        },
        {
            id: 4,
            description: 'Простая одноглазая голова - простая и недорогая.',
            title: 'Маленький циклоп',
            src: images('./head-single-eye.png'),
            type: 'heads',
            cost: 750.0,
        },
        {
            id: 5,
            description: 'Голова робота с тремя вращающимися глазами - отлично подходит для наблюдения.',
            title: 'Бот для наблюдения',
            src: images('./head-surveillance.png'),
            type: 'heads',
            cost: 1255.5,
        },
    ],
    arms: [
        {
            id: 1,
            description:
                'Шарнирная рукоятка с когтем - отлично подходит для обхода углов или работы в стесненных условиях.',
            title: 'Шарнирный',
            src: images('./arm-articulated-claw.png'),
            type: 'arms',
            cost: 275,
        },
        {
            id: 2,
            description:
                'Рука с двумя независимыми когтями - отлично, когда вам нужна дополнительная рука. Нужны четыре руки? Оснастите своего бота двумя из этих рук.',
            title: 'Два когтистых',
            src: images('./arm-dual-claw.png'),
            type: 'arms',
            cost: 285,
        },
        {
            id: 3,
            description: 'Телескопический рычаг с захватом.',
            title: 'Граббер',
            src: images('./arm-grabber.png'),
            type: 'arms',
            cost: 205.5,
        },
        {
            id: 4,
            description:
                'Рычаг с пропеллером - хорош для приведения в движение или в качестве охлаждающего вентилятора.',
            title: 'Пропеллер',
            src: images('./arm-propeller.png'),
            type: 'arms',
            cost: 230,
            onSale: true,
        },
        {
            id: 5,
            description: 'Короткая и обрубленная рука с когтем - просто, но дешево.',
            title: 'Короткий коготь',
            src: images('./arm-stubby-claw.png'),
            type: 'arms',
            cost: 125,
        },
    ],
    torsos: [
        {
            id: 1,
            description: 'Туловище, которое может слегка сгибаться в талии и оснащено термометром.',
            title: 'Гибкий измеренный',
            src: images('./torso-flexible-gauged.png'),
            type: 'torsos',
            cost: 1575,
        },
        {
            id: 2,
            description: 'Менее гибкий торс с датчиком заряда батареи.',
            title: 'Калиброванный',
            src: images('./torso-gauged.png'),
            type: 'torsos',
            cost: 1385,
        },
        {
            id: 3,
            description: 'Простое туловище с сумкой для переноски предметов.',
            title: 'Калиброванный',
            src: images('./torso-pouch.png'),
            type: 'torsos',
            cost: 785,
            onSale: true,
        },
    ],
    bases: [
        {
            id: 1,
            description: 'Двухколесная база с акселерометром для устойчивости.',
            title: 'Двухколесный',
            src: images('./base-double-wheel.png'),
            type: 'bases',
            cost: 895,
        },
        {
            id: 2,
            description: 'Ракетная база, способная к высокоскоростному управляемому полету.',
            title: 'Ракета',
            src: images('./base-rocket.png'),
            type: 'bases',
            cost: 1520.5,
        },
        {
            id: 3,
            description:
                'Одноколесная база с акселерометром, способная развивать более высокие скорости и передвигаться по более пересеченной местности, чем двухколесная разновидность.',
            title: 'Одноколесный',
            src: images('./base-single-wheel.png'),
            type: 'bases',
            cost: 1190.5,
        },
        {
            id: 4,
            description: 'Пружинное основание - отлично подходит для подъема на высокие места.',
            title: 'Пружина',
            src: images('./base-spring.png'),
            type: 'bases',
            cost: 1190.5,
        },
        {
            id: 5,
            description:
                'Недорогая трехколесная база. способна развивать только низкую скорость и может работать только на гладких поверхностях.',
            title: 'Трехколесный',
            src: images('./base-triple-wheel.png'),
            type: 'bases',
            cost: 700.5,
            onSale: true,
        },
    ],
};
export default parts;
