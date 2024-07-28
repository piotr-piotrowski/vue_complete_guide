export default {
    increment(context) {
        console.log('actions-increment');
        setTimeout(() => {
            context.commit('increment');
        }, 2000);
    },
    increase(context, payload) {
        console.log(context);
        context.commit('increase', payload);
    },
};