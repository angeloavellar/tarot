const allTarotCards = [
    '00-TheFool', '01-TheMagician', '02-TheHighPriestess', '03-TheEmpress', '04-TheEmperor', '05-TheHierophant', '06-TheLovers',
    '07-TheChariot', '08-Strength', '09-TheHermit', '10-WheelofFortune', '11-Justice', '12-TheHangedMan', '13-Death', '14-Temperance',
    '15-TheDevil', '16-TheTower', '17-TheStar', '18-TheMoon', '19-TheSun', '20-Judgement', '21-TheWorld',

    'Cups01', 'Cups02', 'Cups03', 'Cups04', 'Cups05', 'Cups06', 'Cups07', 'Cups08', 'Cups09', 'Cups10', 'Cups11', 'Cups12', 'Cups13', 'Cups14',
    'Pentacles01', 'Pentacles02', 'Pentacles03', 'Pentacles04', 'Pentacles05', 'Pentacles06', 'Pentacles07', 'Pentacles08', 'Pentacles09', 'Pentacles10', 'Pentacles11', 'Pentacles12', 'Pentacles13', 'Pentacles14',
    'Swords01', 'Swords02', 'Swords03', 'Swords04', 'Swords05', 'Swords06', 'Swords07', 'Swords08', 'Swords09', 'Swords10', 'Swords11', 'Swords12', 'Swords13', 'Swords14',
    'Wands01', 'Wands02', 'Wands03', 'Wands04', 'Wands05', 'Wands06', 'Wands07', 'Wands08', 'Wands09', 'Wands10', 'Wands11', 'Wands12', 'Wands13', 'Wands14',

];
const cardNameMapping = {
    '00-TheFool': 'The Fool',
    '01-TheMagician': 'The Magician',
    '02-TheHighPriestess': 'The High Priestess',
    '03-TheEmpress': 'The Empress',
    '04-TheEmperor': 'The Emperor',
    '05-TheHierophant': 'The Hierophant',
    '06-TheLovers': 'The Lovers',
    '07-TheChariot': 'The Chariot',
    '08-Strength': 'Strength',
    '09-TheHermit': 'The Hermit',
    '10-WheelofFortune': 'Wheel of Fortune',
    '11-Justice': 'Justice',
    '12-TheHangedMan': 'The Hanged Man',
    '13-Death': 'Death',
    '14-Temperance': 'Temperance',
    '15-TheDevil': 'The Devil',
    '16-TheTower': 'The Tower',
    '17-TheStar': 'The Star',
    '18-TheMoon': 'The Moon',
    '19-TheSun': 'The Sun',
    '20-Judgement': 'Judgement',
    '21-TheWorld': 'The World',
    'Cups01': 'Ace of Cups',
    'Cups02': 'Two of Cups',
    'Cups03': 'Three of Cups',
    'Cups04': 'Four of Cups',
    'Cups05': 'Five of Cups',
    'Cups06': 'Six of Cups',
    'Cups07': 'Seven of Cups',
    'Cups08': 'Eight of Cups',
    'Cups09': 'Nine of Cups',
    'Cups10': 'Ten of Cups',
    'Cups11': 'Page of Cups',
    'Cups12': 'Knight of Cups',
    'Cups13': 'Queen of Cups',
    'Cups14': 'King of Cups',
    'Pentacles01': 'Ace of Pentacles',
    'Pentacles02': 'Two of Pentacles',
    'Pentacles03': 'Three of Pentacles',
    'Pentacles04': 'Four of Pentacles',
    'Pentacles05': 'Five of Pentacles',
    'Pentacles06': 'Six of Pentacles',
    'Pentacles07': 'Seven of Pentacles',
    'Pentacles08': 'Eight of Pentacles',
    'Pentacles09': 'Nine of Pentacles',
    'Pentacles10': 'Ten of Pentacles',
    'Pentacles11': 'Page of Pentacles',
    'Pentacles12': 'Knight of Pentacles',
    'Pentacles13': 'Queen of Pentacles',
    'Pentacles14': 'King of Pentacles',
    'Swords01': 'Ace of Swords',
    'Swords02': 'Two of Swords',
    'Swords03': 'Three of Swords',
    'Swords04': 'Four of Swords',
    'Swords05': 'Five of Swords',
    'Swords06': 'Six of Swords',
    'Swords07': 'Seven of Swords',
    'Swords08': 'Eight of Swords',
    'Swords09': 'Nine of Swords',
    'Swords10': 'Ten of Swords',
    'Swords11': 'Page of Swords',
    'Swords12': 'Knight of Swords',
    'Swords13': 'Queen of Swords',
    'Swords14': 'King of Swords',
    'Wands01': 'Ace of Wands',
    'Wands02': 'Two of Wands',
    'Wands03': 'Three of Wands',
    'Wands04': 'Four of Wands',
    'Wands05': 'Five of Wands',
    'Wands06': 'Six of Wands',
    'Wands07': 'Seven of Wands',
    'Wands08': 'Eight of Wands',
    'Wands09': 'Nine of Wands',
    'Wands10': 'Ten of Wands',
    'Wands11': 'Page of Wands',
    'Wands12': 'Knight of Wands',
    'Wands13': 'Queen of Wands',
    'Wands14': 'King of Wands',
};


const tarotDescriptions = {
    '00-TheFool': 'The Fool represents spontaneity, new beginnings, and a leap of faith.',
    '01-TheMagician': 'The Magician is a card of action, power, and manifestation.',
    '02-TheHighPriestess': 'The High Priestess symbolizes intuition, the subconscious, and mysteries.',
    '03-TheEmpress': 'The Empress is a card of fertility, nurturing, and abundance.',
    '04-TheEmperor': 'The Emperor signifies authority, leadership, and stability.',
    '05-TheHierophant': 'The Hierophant represents tradition, spirituality, and guidance.',
    '06-TheLovers': 'The Lovers symbolize love, partnerships, and choices.',
    '07-TheChariot': 'The Chariot represents determination, control, and triumph.',
    '08-Strength': 'Strength is a card of inner strength, courage, and compassion.',
    '09-TheHermit': 'The Hermit signifies introspection, solitude, and inner guidance.',
    '10-WheelofFortune': 'Wheel of Fortune represents cycles, fate, and unexpected changes.',
    '11-Justice': 'Justice is a card of fairness, balance, and ethical decisions.',
    '12-TheHangedMan': 'The Hanged Man symbolizes surrender, letting go, and gaining new perspectives.',
    '13-Death': 'Death represents transformation, endings, and rebirth.',
    '14-Temperance': 'Temperance is a card of balance, harmony, and moderation.',
    '15-TheDevil': 'The Devil signifies temptation, materialism, and bondage.',
    '16-TheTower': 'The Tower represents sudden upheaval, change, and revelation.',
    '17-TheStar': 'The Star symbolizes hope, inspiration, and spiritual guidance.',
    '18-TheMoon': 'The Moon is a card of illusion, intuition, and the subconscious.',
    '19-TheSun': 'The Sun represents success, joy, and vitality.',
    '20-Judgement': 'Judgement signifies reflection, redemption, and a fresh start.',
    '21-TheWorld': 'The World is a card of completion, fulfillment, and wholeness.',
    'Cups01': 'Ace of Cups represents new emotional beginnings, love, and happiness.',
    'Cups02': 'Two of Cups symbolizes partnership, connection, and mutual attraction.',
    'Cups03': 'Three of Cups signifies celebration, friendship, and joyous occasions.',
    'Cups04': 'Four of Cups represents introspection, contemplation, and missed opportunities.',
    'Cups05': 'Five of Cups is a card of loss, grief, and disappointment.',
    'Cups06': 'Six of Cups signifies nostalgia, childhood memories, and innocence.',
    'Cups07': 'Seven of Cups represents choices, fantasies, and illusions.',
    'Cups08': 'Eight of Cups signifies a journey, leaving the past behind, and seeking deeper meaning.',
    'Cups09': 'Nine of Cups is a card of contentment, satisfaction, and wish fulfillment.',
    'Cups10': 'Ten of Cups symbolizes happiness, harmony, and emotional fulfillment.',
    'Cups11': 'Page of Cups represents new creative opportunities, sensitivity, and emotional messages.',
    'Cups12': 'Knight of Cups is a card of romance, charm, and pursuit of dreams.',
    'Cups13': 'Queen of Cups symbolizes empathy, intuition, and emotional depth.',
    'Cups14': 'King of Cups represents emotional stability, maturity, and compassion.',
    'Pentacles01': 'Ace of Pentacles signifies new financial opportunities, prosperity, and stability.',
    'Pentacles02': 'Two of Pentacles represents balance, juggling responsibilities, and adaptability.',
    'Pentacles03': 'Three of Pentacles signifies teamwork, collaboration, and recognition for your work.',
    'Pentacles04': 'Four of Pentacles represents holding onto possessions, security, and greed.',
    'Pentacles05': 'Five of Pentacles is a card of poverty, hardship, and financial loss.',
    'Pentacles06': 'Six of Pentacles signifies generosity, charity, and sharing wealth.',
    'Pentacles07': 'Seven of Pentacles represents patience, assessment, and waiting for results.',
    'Pentacles08': 'Eight of Pentacles signifies dedication, skill development, and craftsmanship.',
    'Pentacles09': 'Nine of Pentacles is a card of self-sufficiency, luxury, and independence.',
    'Pentacles10': 'Ten of Pentacles symbolizes wealth, inheritance, and family legacy.',
    'Pentacles11': 'Page of Pentacles represents new opportunities for learning and financial growth.',
    'Pentacles12': 'Knight of Pentacles is a card of hard work, responsibility, and reliability.',
    'Pentacles13': 'Queen of Pentacles symbolizes practicality, nurturing, and financial security.',
    'Pentacles14': 'King of Pentacles represents financial success, stability, and entrepreneurship.',
    'Swords01': 'Ace of Swords represents new ideas, clarity, and breakthroughs in thinking.',
    'Swords02': 'Two of Swords symbolizes difficult decisions, stalemate, and choices.',
    'Swords03': 'Three of Swords signifies heartbreak, sorrow, and emotional pain.',
    'Swords04': 'Four of Swords represents rest, recuperation, and healing.',
    'Swords05': 'Five of Swords is a card of conflict, defeat, and strategy.',
    'Swords06': 'Six of Swords signifies transition, moving on, and finding solutions.',
    'Swords07': 'Seven of Swords represents deception, stealth, and avoiding conflict.',
    'Swords08': 'Eight of Swords signifies feeling trapped, self-imposed limitations, and anxiety.',
    'Swords09': 'Nine of Swords is a card of worry, nightmares, and anxiety.',
    'Swords10': 'Ten of Swords symbolizes rock bottom, betrayal, and a new beginning.',
    'Swords11': 'Page of Swords represents curiosity, intellectual pursuits, and new ideas.',
    'Swords12': 'Knight of Swords is a card of quick thinking, action, and assertiveness.',
    'Swords13': 'Queen of Swords symbolizes clear communication, independence, and sharp intellect.',
    'Swords14': 'King of Swords represents authority, logic, and rational thinking.',
    'Wands01': 'Ace of Wands represents new opportunities, inspiration, and creative energy.',
    'Wands02': 'Two of Wands symbolizes planning, ambition, and making choices.',
    'Wands03': 'Three of Wands signifies expansion, foresight, and exploration.',
    'Wands04': 'Four of Wands represents celebration, harmony, and achievements.',
    'Wands05': 'Five of Wands is a card of competition, conflict, and challenges.',
    'Wands06': 'Six of Wands signifies victory, recognition, and public acclaim.',
    'Wands07': 'Seven of Wands represents defending your position, determination, and resilience.',
    'Wands08': 'Eight of Wands signifies swift progress, fast-paced changes, and communication.',
    'Wands09': 'Nine of Wands is a card of resilience, strength, and standing your ground.',
    'Wands10': 'Ten of Wands symbolizes burdens, responsibility, and hard work.',
    'Wands11': 'Page of Wands represents enthusiasm, new beginnings, and creative endeavors.',
    'Wands12': 'Knight of Wands is a card of action, adventure, and pursuing your passions.',
    'Wands13': 'Queen of Wands symbolizes confidence, leadership, and independence.',
    'Wands14': 'King of Wands represents inspiration, charisma, and natural leadership.',
};

function generateRandomTarotCard(availableCards) {
    if (availableCards.length === 0) {
        return 'No more cards available';
    }
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const randomCard = availableCards.splice(randomIndex, 1)[0]; 
    return randomCard;
}

function drawThreeRandomTarotCards() {
    const availableCards = [...allTarotCards]; 
    const drawnCards = [];
    for (let i = 0; i < 3; i++) {
        const randomCard = generateRandomTarotCard(availableCards);
        if (randomCard === 'No more cards available') {
            break; 
        }
        const description = tarotDescriptions[randomCard];
        drawnCards.push({ card: randomCard, description });
    }
    return drawnCards;
}


const generateButton = document.getElementById('generateButton');
const cardDisplay = document.getElementById('cardDisplay');

generateButton.addEventListener('click', () => {
    const threeRandomCards = drawThreeRandomTarotCards();
    const cardDisplayText = threeRandomCards.map(cardInfo => {
        const description = cardInfo.description;
        return `<div class="card"><img src="images/${cardInfo.card}.jpg" alt="${cardInfo.card}" /><br>${description}</div>`;
    }).join('');

    cardDisplay.innerHTML = `<div class="card-container">${cardDisplayText}</div>`;
});