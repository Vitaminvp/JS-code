export const params = {
    lines: [
        {
            background: '#00F',
            updateTime: 2500,
            elements: [
                {
                    background: '#0F0',
                    width: 25
                },
                {
                    background: '#F00',
                    width: 50
                },
                {
                    background: '#00D',
                    width: 25
                }
            ]
        },
        {
            background: '#0F0',
            updateTime: 1500,
            elements: [
                {
                    background: '#00F',
                    width: 30
                },
                {
                    background: '#F00',
                    width: 30
                },
                {
                    background: '#0F0',
                    width: 30
                },
                {
                    background: '#F00',
                    width: 10
                }
            ]
        },
        {
            background: '#F00',
            updateTime: 2000,
            elements: [
                {
                    background: '#CCC',
                    width: 45
                },
                {
                    background: '#F00',
                    width: 20
                },
                {
                    background: '#0DF',
                    width: 35
                }
            ]
        },
        {
            background: '#F00',
            updateTime: 1000,
            elements: [
                {
                    background: '#CCC',
                    width: 25
                },
                {
                    background: '#F00',
                    width: 20
                },
                {
                    background: '#0DF',
                    width: 35
                },
                {
                    background: '#0DF',
                    width: 15
                }
            ]
        }
    ]
};

export const DEFAULT_VALUES = {
    width: '50px',
    background: 'transparent',
    delay: 1000
};

export const CLASSES = {
    element: 'element',
    line: 'line',
};