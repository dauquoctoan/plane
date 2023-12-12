import { IOptionItem } from '@/components/ui/select/select';
import { IInfo } from '@/types';
import Avatar from '@/components/ui/avatar';

export function createMembeSelectOption(users: IInfo[]): IOptionItem[] {
    if (users?.length > 0)
        return users.map((item) => {
            return {
                name: (item.first_name || '') + (item.last_name || '') || '-',
                icon: (
                    <Avatar size="md">
                        {(item.first_name || '') + (item.last_name || '') ||
                            '-'}
                    </Avatar>
                ),
                key: item.id,
            };
        });
    else return [];
}
