export const flex = (type: string, other: any = {}) => ({
    display: 'flex',
    flexDirection: type,
    ...other
})