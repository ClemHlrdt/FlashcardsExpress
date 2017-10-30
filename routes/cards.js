const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data; // equals to cards = data.cards. ES6 feature

router.get('/:id', (req, res) => {
    const {side} = req.query;
    const { id } = req.params;
    if(!side){
        return res.redirect(`/cards/${id}?side=question`);
    }

    const text = cards[id][side];
    const { hint } = cards[id];

    const templateData = { id, text };
    if(side === 'question'){
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else if(side === 'answer'){
        templateData.hint = hint;
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }

    res.render('card', templateData);
});

router.get('/', (req, res) => {
    const numberOfCards = cards.length;
    const random = Math.floor(Math.random() * numberOfCards) + 1;
    res.redirect(`/cards/${random}?side=question`);
});

module.exports = router;