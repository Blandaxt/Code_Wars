// 7 kyu Complementary DNA:
//
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
// If you want to know more http://en.wikipedia.org/wiki/DNA
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
//
// DNAStrand ("ATTGC") // return "TAACG"
//
// DNAStrand ("GTAT") // return "CATA"

function DNAStrand(dna){
  //your code here
  let recipe = {A: "T", T: "A", C: "G", G: "C"}
  let newStrand =  dna.replace(/./g, (c) => recipe[c])
    console.log(dna, newStrand)
    return newStrand
}

// Sample Tests:
//
// Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
// Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
// Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");
