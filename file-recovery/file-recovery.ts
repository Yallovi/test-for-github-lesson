/**
 * * Если мы на ветке feature и заметили ошибку в файле и нам нужно восстановить его из прошлых коммитов
 * * Можно сделать это с помощью git checkout <hash> / <branch name> <some-file>
 * @format
 */
function testRun(text: string): number {
    console.log('text =>', text)
    return 12 + 10
}

testRun('1234')