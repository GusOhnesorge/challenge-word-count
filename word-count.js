//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  phrase = phrase.toLowerCase()
  // replaces the characters in brackets with "" in g (the whole string)
  phrase = phrase.replace(/[!&@$%^&\?\.,:]/g, " ")
  // initial attempt at fixing parentheses
  // uses trim() to remove extra spaces
  // phrase = phrase.replace(/(\s'|'\s|)/g, " ")
  let separate_words = phrase.trim().split(/\s+/)
  let word_count = {}
  for (let i = 0; i<separate_words.length; i++){
    let word = separate_words[i]
    // parsing each word for a pattern matching '***' of any length
    if (word.match(/^\'.*\'$/g) !== null){
      // cutting off parentheses
      word = word.substring(1, word.length-1)
    }
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
