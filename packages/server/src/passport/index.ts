export { passportUseJwtStrategy } from './jwt';

function f1() {
    let N = 10;

    return () => {
        return N * 2;
    };
}





const f2 = f1();
f2();