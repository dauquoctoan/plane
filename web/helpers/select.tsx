import { IOptionItem } from '@/components/ui/select/select';
import { IInfo, ILabel, IProjectMember } from '@/types';
import Avatar from '@/components/ui/avatar';

export function createMembeSelectOption(
    users?: IProjectMember[],
    changeKey: string = '',
    size: "sm" | "md" | "lg" | "xl" = 'md'
): IOptionItem[] {
    if (users && users?.length > 0)
        return users?.map((item) => {
            return {
                title: (item.user.first_name || '') + (item.user.last_name || '') || '',
                icon: (
                    <Avatar size={size}>
                        {(item.user.first_name || '') + (item.user.last_name || '') ||
                            '-'}
                    </Avatar>
                ),
                value: changeKey ? changeKey + '::' + item.user.id : item.user.id,
            };
        });
    else return [];
}

export function createIssueLabelSelectOption(labels?: ILabel[], showMoreText: boolean = true): IOptionItem[] {
    return labels
        ? labels.map((e) => ({
            title: showMoreText ? e.name : '',
            value: e.id.toString(),
            icon: (
                <div
                    className="w-2 h-2 rounded-full bg-color-special-primary overflow-hidden text-ellipsis"
                    style={{ background: e.color }}
                ></div>
            ),
        }))
        : [];
}
