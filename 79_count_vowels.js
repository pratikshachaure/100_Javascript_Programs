let findVowels="How to find the Vowels and present in this string lets find it";
    let count=0;
    for(let i=0;i<findVowels.length;i++)
{

    if(findVowels[i]=='A'|| findVowels[i]=='E'|| findVowels[i]=='I'|| findVowels[i]=='O'|| findVowels[i]=='U'|| findVowels[i]=='a'|| findVowels[i]=='e'|| findVowels[i]=='i'|| findVowels[i]=='o'|| findVowels[i]=='u')
{
    count++;
}
}

console.log("Total vowelse in the string are:-",count)
