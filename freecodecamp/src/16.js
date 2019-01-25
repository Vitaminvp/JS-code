function addTogether() {
    const args = Array.from(arguments);

    return args.some(el => typeof el !== 'number')?undefined:
        args.length > 1 ? args[0]+args[1]:
            (secondNum) => typeof secondNum === 'number' ? secondNum + args[0]:
                undefined;
}

addTogether(2,3);