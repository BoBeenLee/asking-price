import _ from 'lodash';
export const getTargetContracts = (selling, buying, nextPrice) => {
    if (_.some([selling, buying, nextPrice], _.isEmpty)) {
        return;
    }
    if (nextPrice.type === 'B') {
        return _.filter(selling, item => item.amount <= nextPrice.amount);
    } else if (nextPrice.type === 'S') {
        return _.filter(buying, item => item.amount >= nextPrice.amount);
    }
};

export const isTargetContract = (selling, buying, nextPrice) => !_.isEmpty(getTargetContracts(selling, buying, nextPrice));

export const isDiffPrice = (price, nextPrice) => {
    return nextPrice && price.id !== nextPrice.id;
};