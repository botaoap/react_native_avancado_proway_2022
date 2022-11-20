import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { OrderForm } from "../../Forms/OrderForm";
import { Buttom } from "../Buttom";
import { Background } from "./styles";

export function NewOrder() {
    function handleSnapPress() {

    }

    const bottomSheetRef = useRef<BottomSheetModal>(null!);

    return (
        <>
            <Buttom title="Novo chamado" onPress={handleSnapPress} />

            <BottomSheetModalProvider>
                <BottomSheetModal
                    style={{ padding: 24 }}
                    enablePanDownToClose={true}
                    snapPoints={["50%"]}
                    ref={bottomSheetRef}
                    backdropComponent={() => <Background />}
                >
                    <OrderForm />
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </>
    )
}