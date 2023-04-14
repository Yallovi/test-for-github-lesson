/** @format */

/**
 * * git reset
 * ? Три этапа:
 * * 1.changes in working dir
 * * 2. add files to working dir (git add .)
 * * 3. commit changes (git commit)
 */

/**
 * * git reset --soft
 * ! git reset --soft [hash commit (на который хочешь откатиться)] - эта команда откатывает 3-й этап (т.е. коммит)
 */

/**
 * * git reset --mixed
 * ! git reset --mixed [hash commit] - эта команда откатывает два этапа (--mixed стоит по дефолту)
 */

/**
 * * git reset --hard
 * ! git reset --hard [hash commit] - эта команда откатывает сразу три этапа (сама опасная :D)
 */
