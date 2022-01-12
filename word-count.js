//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  phrase.toLowerCase()
  let separate_words = phrase.split(" ")
  let word_count = {}
  for (let i = 0; i<separate_words.length; i++){
    let word = separate_words[i]
    let current_count = word_count[word]
    // === avoiding type conversion
    // could also check using slower 'in' property
    if (current_count === undefined){
      word_count[word] = 1
    }
    else{
      word_count[word] = current_count+=1
    }
  }  
  return word_count
};
