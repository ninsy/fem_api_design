const quads = ["0000", "0001", "0010", "0011", "0100", "0101","0110", "0111", "1000", "1001", "1010", "1011","1100", "1101", "1110", "1111"];

const hex2bin = (char) => {
  if(char >= '0' && char <= '9') return quads[char-'0'];
  if(char >= 'A' && char <= 'F') return quads[10 + char - 'A'];
  if((char >= 'a' && char <= 'f')) return quads[10 + char - 'a'];
}

console.log(hex2bin("F"));
console.log(hex2bin("A"));
console.log(hex2bin("9"));
console.log(hex2bin("F"));
console.log(hex2bin("A"));
console.log(hex2bin("9"));
