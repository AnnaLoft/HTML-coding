import { BaseThunkType, InferActionTypes } from './root-reducer';
import WordsApi from './../components/API/wordsApi/wordsApi';

export type ActionTypes = InferActionTypes<typeof wordsReducerActions>
type ThunkType = BaseThunkType<ActionTypes>
export const initialWordsState: any = {
    'Cure': { _id: 'unknown_Cure', WordData: { eng: "Cure", rus: "Лечить", img: "./images/Cure.png", sound: "./sounds/Cure.mp3", category: "Action A", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'wash': { _id: 'unknown_wash', WordData: { eng: "wash", rus: "Мыть", img: "./images/wash.png", sound: "./sounds/wash.mp3", category: "Action A", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'dance': { _id: 'unknown_dance', WordData: { eng: "dance", rus: "Танцевать", img: "./images/dance.png", sound: "./sounds/dance.mp3", category: "Action A", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'swim': { _id: 'unknown_swim', WordData: { eng: "swim", rus: "Плавать", img: "./images/swim.png", sound: "./sounds/swim.mp3", category: "Action A", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'read': { _id: 'unknown_read', WordData: { eng: "read", rus: "Читать", img: "./images/read.png", sound: "./sounds/read.mp3", category: "Action A", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'draw': { _id: 'unknown_draw', WordData: { eng: "draw", rus: "Рисовать", img: "./images/draw.png", sound: "./sounds/draw.mp3", category: "Action A", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'cry': { _id: 'unknown_cry', WordData: { eng: "cry", rus: "Плакать", img: "./images/cry.png", sound: "./sounds/cry.mp3", category: "Action A", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'write': { _id: 'unknown_write', WordData: { eng: "write", rus: "Писать", img: "./images/write.png", sound: "./sounds/write.mp3", category: "Action A", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    
    'wink': { _id: 'unknown_wink', WordData: { eng: "wink", rus: "Подмигивать", img: "./images/wink.png", sound: "./sounds/wink.mp3", category: "Action B", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'eat': { _id: 'unknown_eat', WordData: { eng: "eat", rus: "Есть", img: "./images/eat.png", sound: "./sounds/eat.mp3", category: "Action B", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'kiss': { _id: 'unknown_kiss', WordData: { eng: "kiss", rus: "Целовать", img: "./images/kiss.png", sound: "./sounds/kiss.mp3", category: "Action B", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'buy': { _id: 'unknown_buy', WordData: { eng: "buy", rus: "Покупать", img: "./images/buy.png", sound: "./sounds/buy.mp3", category: "Action B", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'joy': { _id: 'unknown_joy', WordData: { eng: "joy", rus: "Радоваться", img: "./images/joy.png", sound: "./sounds/joy.mp3", category: "Action B", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'argue': { _id: 'unknown_argue', WordData: { eng: "argue", rus: "Спорить", img: "./images/argue.png", sound: "./sounds/argue.mp3", category: "Action B", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'greet': { _id: 'unknown_greet', WordData: { eng: "greet", rus: "Приветствовать", img: "./images/greet.png", sound: "./sounds/greet.mp3", category: "Action B", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'think': { _id: 'unknown_think', WordData: { eng: "think", rus: "Думать", img: "./images/think.png", sound: "./sounds/think.mp3", category: "Action B", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    
    'cupcake': { _id: 'unknown_cupcake', WordData: { eng: "cupcake", rus: "Кекс", img: "./images/cupcake.png", sound: "./sounds/cupcake.mp3", category: "Food", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'bread': { _id: 'unknown_bread', WordData: { eng: "bread", rus: "Хлеб", img: "./images/bread.png", sound: "./sounds/bread.mp3", category: "Food", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'blueberries': { _id: 'unknown_blueberries', WordData: { eng: "blueberries", rus: "Черника", img: "./images/blueberries.png", sound: "./sounds/blueberries.mp3", category: "Food", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'pizza': { _id: 'unknown_pizza', WordData: { eng: "pizza", rus: "Пицца", img: "./images/pizza.png", sound: "./sounds/pizza.mp3", category: "Food", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'noodles': { _id: 'unknown_noodles', WordData: { eng: "noodles", rus: "Лапша", img: "./images/noodles.png", sound: "./sounds/noodles.mp3", category: "Food", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'meat': { _id: 'unknown_meat', WordData: { eng: "meat", rus: "Мясо", img: "./images/meat.png", sound: "./sounds/meat.mp3", category: "Food", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'broccoli': { _id: 'unknown_broccoli', WordData: { eng: "broccoli", rus: "Броколи", img: "./images/broccoli.png", sound: "./sounds/broccoli.mp3", category: "Food", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'orange': { _id: 'unknown_orange', WordData: { eng: "orange", rus: "Апельсин", img: "./images/orange.png", sound: "./sounds/orange.mp3", category: "Food", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    
    
    'fork': { _id: 'unknown_fork', WordData: { eng: "fork", rus: "Вилка", img: "./images/fork.png", sound: "./sounds/fork.mp3", category: "Dishes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'spoon': { _id: 'unknown_spoon', WordData: { eng: "spoon", rus: "Ложка", img: "./images/spoon.png", sound: "./sounds/spoon.mp3", category: "Dishes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'knife': { _id: 'unknown_knife', WordData: { eng: "knife", rus: "Нож", img: "./images/knife.png", sound: "./sounds/knife.mp3", category: "Dishes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'mug': { _id: 'unknown_mug', WordData: { eng: "mug", rus: "Кружка", img: "./images/mug.png", sound: "./sounds/mug.mp3", category: "Dishes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'plate': { _id: 'unknown_plate', WordData: { eng: "plate", rus: "Тарелка", img: "./images/plate.png", sound: "./sounds/plate.mp3", category: "Dishes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'pan': { _id: 'unknown_pan', WordData: { eng: "pan", rus: "Сковорода", img: "./images/pan.png", sound: "./sounds/pan.mp3", category: "Dishes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'teapot': { _id: 'unknown_teapot', WordData: { eng: "teapot", rus: "Чайник", img: "./images/teapot.png", sound: "./sounds/teapot.mp3", category: "Dishes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'glass': { _id: 'unknown_glass', WordData: { eng: "glass", rus: "Стакан", img: "./images/glass.png", sound: "./sounds/glass.mp3", category: "Dishes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    
    'parrot': { _id: 'unknown_parrot', WordData: { eng: "parrot", rus: "Попугай", img: "./images/parrot.png", sound: "./sounds/parrot.mp3", category: "Pets", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'turtle': { _id: 'unknown_turtle', WordData: { eng: "turtle", rus: "Черепаха", img: "./images/turtle.png", sound: "./sounds/turtle.mp3", category: "Pets", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'cat': { _id: 'unknown_cat', WordData: { eng: "cat", rus: "Кот", img: "./images/cat.png", sound: "./sounds/cat.mp3", category: "Pets", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'hamster': { _id: 'unknown_hamster', WordData: { eng: "hamster", rus: "Хомяк", img: "./images/hamster.png", sound: "./sounds/hamster.mp3", category: "Pets", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'dog': { _id: 'unknown_dog', WordData: { eng: "dog", rus: "собака", img: "./images/dog.png", sound: "./sounds/dog.mp3", category: "Pets", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'rabbit': { _id: 'unknown_rabbit', WordData: { eng: "rabbit", rus: "Кролик", img: "./images/rabbit.png", sound: "./sounds/rabbit.mp3", category: "Pets", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'fish': { _id: 'unknown_fish', WordData: { eng: "fish", rus: "Рыба", img: "./images/fish.png", sound: "./sounds/fish.mp3", category: "Pets", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'frog': { _id: 'unknown_frog', WordData: { eng: "frog", rus: "лягушка", img: "./images/frog.png", sound: "./sounds/frog.mp3", category: "Pets", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    
    'horse': { _id: 'unknown_horse', WordData: { eng: "horse", rus: "лошадь", img: "./images/horse.png", sound: "./sounds/horse.mp3", category: "Animals", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'chicken': { _id: 'unknown_chicken', WordData: { eng: "chicken", rus: "Курица", img: "./images/chicken.png", sound: "./sounds/chicken.mp3", category: "Animals", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'giraffe': { _id: 'unknown_giraffe', WordData: { eng: "giraffe", rus: "Жираф", img: "./images/giraffe.png", sound: "./sounds/giraffe.mp3", category: "Animals", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'cow': { _id: 'unknown_cow', WordData: { eng: "cow", rus: "Корова", img: "./images/cow.png", sound: "./sounds/cow.mp3", category: "Animals", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'lion': { _id: 'unknown_pig', WordData: { eng: "lion", rus: "Лев", img: "./images/lion.png", sound: "./sounds/lion.mp3", category: "Animals", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'pig': { _id: 'unknown_pig', WordData: { eng: "pig", rus: "Свинья", img: "./images/pig.png", sound: "./sounds/pig.mp3", category: "Animals", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'sheep': { _id: 'unknown_sheep', WordData: { eng: "sheep", rus: "овечка", img: "./images/sheep.png", sound: "./sounds/sheep.mp3", category: "Animals", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'dolphin': { _id: 'unknown_dolphin', WordData: { eng: "dolphin", rus: "Дельфин", img: "./images/dolphin.png", sound: "./sounds/dolphin.mp3", category: "Animals", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    
    'shirt': { _id: 'unknown_shirt', WordData: { eng: "shirt", rus: "рубашка", img: "./images/shirt.png", sound: "./sounds/shirt.mp3", category: "Clothes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'pants': { _id: 'unknown_pants', WordData: { eng: "pants", rus: "Штаны", img: "./images/pants.png", sound: "./sounds/pants.mp3", category: "Clothes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'skirt': { _id: 'unknown_skirt', WordData: { eng: "skirt", rus: "юбка", img: "./images/skirt.png", sound: "./sounds/skirt.mp3", category: "Clothes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'coat': { _id: 'unknown_coat', WordData: { eng: "coat", rus: "пальто", img: "./images/coat.png", sound: "./sounds/coat.mp3", category: "Clothes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'dress': { _id: 'unknown_dress', WordData: { eng: "dress", rus: "платье", img: "./images/dress.png", sound: "./sounds/dress.mp3", category: "Clothes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'shoe': { _id: 'unknown_shoe', WordData: { eng: "shoe", rus: "туфли", img: "./images/shoe.png", sound: "./sounds/shoe.mp3", category: "Clothes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'boot': { _id: 'unknown_boot', WordData: { eng: "boot", rus: "ботинок", img: "./images/boot.png", sound: "./sounds/boot.mp3", category: "Clothes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'blouse': { _id: 'unknown_blouse', WordData: { eng: "blouse", rus: "блузка", img: "./images/blouse.png", sound: "./sounds/blouse.mp3", category: "Clothes", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    
    'angry': { _id: 'unknown_angry', WordData: { eng: "angry", rus: "Сердитый", img: "./images/angry.png", sound: "./sounds/angry.mp3", category: "Emotion", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'smile': { _id: 'unknown_smile', WordData: { eng: "smile", rus: "Улыбающийся", img: "./images/smile.png", sound: "./sounds/smile.mp3", category: "Emotion", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'sad': { _id: 'unknown_sad', WordData: { eng: "sad", rus: "Грустный", img: "./images/sad.png", sound: "./sounds/sad.mp3", category: "Emotion", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'scared': { _id: 'unknown_scared', WordData: { eng: "scared", rus: "Испуганный", img: "./images/scared.png", sound: "./sounds/scared.mp3", category: "Emotion", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'laugh': { _id: 'unknown_laugh', WordData: { eng: "laugh", rus: "Смеющийся", img: "./images/laugh.png", sound: "./sounds/laugh.mp3", category: "Emotion", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'tired': { _id: 'unknown_tired', WordData: { eng: "tired", rus: "Уставший", img: "./images/tired.png", sound: "./sounds/tired.mp3", category: "Emotion", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'happy': { _id: 'unknown_happy', WordData: { eng: "happy", rus: "Счастливый", img: "./images/happy.png", sound: "./sounds/happy.mp3", category: "Emotion", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
    'surprised': { _id: 'unknown_surprised', WordData: { eng: "surprised", rus: "Удивленный", img: "./images/surprised.png", sound: "./sounds/surprised.mp3", category: "Emotion", Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 } }, userId: 'unknown' },
}


export const WordsReducer = (state = initialWordsState, action: any) => {

    switch (action.type) {

        case 'SET_WORD':
            return {
                ...state,
                ...action.newWord
            }
        case 'SET_ALL_WORDS':
            return {
                ...action.newWords
            }
        case 'UPDATE_SINGLE_WORD':
            return {
                ...state,
                ...action.updatedWord
            }
        case 'DELETE_WORD':
            delete state[action.word.WordData.eng]
            return {
                ...state,
            }


        default:
            return state;
    }

}

export const wordsReducerActions = {
    setWord: (newWord: any) =>
        ({ type: 'SET_WORD', newWord: newWord } as const),
    setAllWords: (newWord: any) =>
        ({ type: 'SET_ALL_WORDS', newWords: newWord } as const),
    updateWord: (updatedWord: any) =>
        ({ type: 'UPDATE_SINGLE_WORD', updatedWord: updatedWord } as const),
    deleteWord: (word: any) =>
        ({ type: 'DELETE_WORD', word: word } as const),
}

export const deleteWordThunk = (word: any): ThunkType => async (dispatch) => {
    const res = await WordsApi.deleteWord(word._id)
   

    dispatch(wordsReducerActions.deleteWord(res))
    dispatch(getAllWordsThunk)
  

}



export const setWordThunk = (word: any): ThunkType => async (dispatch) => {
    let resWord: any = await WordsApi.postWord(word)
   

    dispatch(wordsReducerActions.setWord({
        [resWord.WordData.eng]: resWord
    }))
}

export const getWordThunk = (id: string): ThunkType => async (dispatch) => {
    
}

export const getAllWordsThunk = (): ThunkType => async (dispatch) => {
    let words = await WordsApi.getAllWords()
    const newWords: any = {}
    words.forEach((word: any) => newWords[word.WordData.eng] = word);
    dispatch(wordsReducerActions.setAllWords(newWords))
}

export const updateSinleWord = (updatedWord: any): ThunkType => async (dispatch) => {
    let resUpdatedWord = await WordsApi.putWord(
        updatedWord._id, {
        _id: updatedWord._id,
        WordData: updatedWord.WordData,
        userId: updatedWord.userId,
    })

    let inStoreWordName = updatedWord._id.split('_')[1]

    dispatch(wordsReducerActions.updateWord({
        [inStoreWordName]: resUpdatedWord
    }))
}
